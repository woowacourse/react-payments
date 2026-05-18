import { Validator } from "./validators/CardValidator";

function runValidators(
  value: string,
  validators: Array<(v: string) => void>,
): string[] {
  return validators.reduce<string[]>((messages, validator) => {
    try {
      validator(value);
    } catch (err) {
      messages.push((err as Error).message);
    }
    return messages;
  }, []);
}

export const CardSerializer = {
  validate(data: {
    cardNumber: string;
    cardExpiryDate: string;
    cardBrand: string;
    cardCVC: string;
    cardPassword: string;
  }) {
    const { cardNumber, cardExpiryDate, cardCVC, cardPassword } = data;

    const mm = cardExpiryDate.slice(0, 2);
    const yy = cardExpiryDate.slice(2, 4);

    const errorMessages = {
      cardNumber: {
        errorState: false,
        messages: runValidators(cardNumber, [
          Validator.isNumber,
          Validator.isValidNetworkBrand,
        ]),
      },
      cardExpiryDate: {
        errorState: false,
        messages: [
          ...runValidators(mm, [
            Validator.isValidCardExpiryDateLength,
            Validator.isNumber,
            Validator.isValidMonth,
          ]),
          ...runValidators(yy, [
            Validator.isValidCardExpiryDateLength,
            Validator.isNumber,
            Validator.isValidYear,
          ]),
        ],
      },
      cardBrand: {
        errorState: false,
        messages: [] as string[],
      },
      cardCVC: {
        errorState: false,
        messages: runValidators(cardCVC, [
          Validator.isValidCardCVCLength,
          Validator.isNumber,
        ]),
      },
      cardPassword: {
        errorState: false,
        messages: runValidators(cardPassword, [
          Validator.isValidCardPassswordLength,
          Validator.isNumber,
        ]),
      },
    };

    const hasError = Object.keys(errorMessages).some((key) => {
      const field = errorMessages[key as keyof typeof errorMessages];
      if (field.messages.length > 0) {
        field.errorState = true;
        return true;
      }
      return false;
    });

    if (hasError) {
      return { success: false, errorMessages };
    }

    return { success: true };
  },
};
