import {
  USE_EXPIRATION_DATE,
  getExpirationErrorMessage,
} from "./useExpirationDateState";

export default function useExpirationDateInputHandler(
  cardExpirationDate: string[],
  errorMessage: string[],
  handleChange: (value: string, index: number) => void,
  onComplete: () => void
) {
  const checkNextStep = ({
    monthValue,
    yearValue,
    monthErrorMessage,
    yearErrorMessage,
  }: {
    monthValue: string;
    yearValue: string;
    monthErrorMessage: string;
    yearErrorMessage: string;
  }) => {
    if (
      monthValue.length !== USE_EXPIRATION_DATE.MAX_LENGTH ||
      yearValue.length !== USE_EXPIRATION_DATE.MAX_LENGTH
    ) {
      return;
    }

    if (monthErrorMessage !== "" || yearErrorMessage !== "") {
      return;
    }

    onComplete();
  };

  const handleCardExpirationDateChange = (value: string, index: number) => {
    handleChange(value, index);

    const updatedExpirationDate = [...cardExpirationDate];
    updatedExpirationDate[index] = value;

    const updatedErrorMessages = [...errorMessage];
    updatedErrorMessages[index] = getExpirationErrorMessage(value, index);

    checkNextStep({
      monthValue: updatedExpirationDate[0],
      yearValue: updatedExpirationDate[1],
      monthErrorMessage: updatedErrorMessages[0],
      yearErrorMessage: updatedErrorMessages[1],
    });
  };

  return {
    handleCardExpirationDateChange,
  };
}
