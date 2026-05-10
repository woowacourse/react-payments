import { useEffect, useMemo, useState } from "react";
import { type CardFormState, type CardIssuer, type CardNumberSegments } from "../types";
import { createDigitFieldValidations, getCardNetwork, validateCardIssuer, validateMonth, validateYear } from "../utils";
import useArrayInput from "./useArrayInput";
import useInput from "./useInput";
import { CARD_NETWORK } from "../constants";

export default function useCardForm() {
  const [step, setStep] = useState(0);

  const cardNumberSegmentsField = useArrayInput(['', '', '', ''], {
    validation: (cardNumberSegments) => {
      const cardNetwork = getCardNetwork(cardNumberSegments as CardNumberSegments);
      return [
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(cardNetwork ? CARD_NETWORK[cardNetwork]["cardNumberLength"] % 4 : 4)],
      ]
    }
  });

  const cardIssuerField = useInput<CardIssuer | null, HTMLSelectElement>(null, {
    validation: () => {
      return [{
        type: 'onBlur',
        validator: validateCardIssuer,
        message: "카드사를 선택해주세요"
      }]
    }
  });

  const cardExpiryDateField = useArrayInput(["", ""], {
    validation: () => {
      return [
        [
          ...createDigitFieldValidations(2),
          {
            type: 'onBlur',
            validator: validateMonth,
            message: '유효한 월을 입력해주세요. (01 ~ 12)',
          },
        ], [
          ...createDigitFieldValidations(2),
          {
            type: 'onBlur',
            validator: validateYear,
            message: '유효한 년도를 입력해주세요. (00 ~ 99)',
          },
        ],
      ]
    }
  })

  const cardValidationCodeField = useInput("", {
    validation: () => [...createDigitFieldValidations(3)]
  })

  const cardPasswordField = useInput("", { validation: () => ([...createDigitFieldValidations(2)]) })

  const formValue = useMemo(() => ({
    cardNumberSegments: cardNumberSegmentsField.values,
    cardIssuer: cardIssuerField.value,
    cardExpiryDate: cardExpiryDateField.values,
    cardValidationCode: cardValidationCodeField.value,
    cardPassword: cardPasswordField.value
  } as CardFormState), [cardExpiryDateField, cardIssuerField, cardNumberSegmentsField, cardPasswordField, cardValidationCodeField]);

  const formStatus = useMemo(() => ({
    isValid: cardNumberSegmentsField.isValid && cardIssuerField.isValid && cardExpiryDateField.isValid && cardValidationCodeField.isValid && cardPasswordField.isValid
  }), [cardExpiryDateField.isValid, cardIssuerField.isValid, cardNumberSegmentsField.isValid, cardPasswordField.isValid, cardValidationCodeField.isValid])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (cardNumberSegmentsField.isValid) setStep(prev => Math.max(1, prev));
    if (cardIssuerField.isValid) setStep(prev => Math.max(2, prev));
    if (cardExpiryDateField.isValid) setStep(prev => Math.max(3, prev));
    if (cardValidationCodeField.isValid) setStep(prev => Math.max(4, prev));
  }, [cardExpiryDateField.isValid, cardIssuerField.isValid, cardNumberSegmentsField.isValid, cardPasswordField.isValid, cardValidationCodeField.isValid])

  return {
    step,
    formValue,
    formStatus,
    cardNumberSegments: cardNumberSegmentsField,
    cardIssuer: cardIssuerField,
    cardExpiryDate: cardExpiryDateField,
    cardValidationCode: cardValidationCodeField,
    cardPassword: cardPasswordField
  }
}