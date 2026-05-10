import { useEffect, useMemo, useState } from "react";
import { type CardFormState, type CardIssuer, type CardNumberSegments } from "../types";
import { createDigitFieldValidations, getCardNetwork, validateCardIssuer, validateMonth } from "../utils";
import useArrayInput from "./useArrayInput";
import useInput from "./useInput";
import { CARD_EXPIRY_MONTH_LENGTH, CARD_EXPIRY_YEAR_LENGTH, CARD_NETWORK, CARD_NUMBER_SEGMENT_LENGTH, CARD_PASSWORD_LENGTH, CARD_VALIDATION_CODE_DEFAULT_LENGTH } from "../constants";

export const CARD_FORM_STEP = {
  CARD_PASSWORD: 4,
  CARD_VALIDATION_CODE: 3,
  CARD_EXPIRY_DATE: 2,
  CARD_ISSUER: 1,
  CARD_NUMBER: 0,
};

export default function useCardForm() {
  const [step, setStep] = useState(0);

  const cardNumberSegmentsField = useArrayInput(['', '', '', ''], {
    validation: (cardNumberSegments) => {
      const cardNetwork = getCardNetwork(cardNumberSegments as CardNumberSegments);
      const lastSegmentsLength = cardNetwork ?
        CARD_NETWORK[cardNetwork]["cardNumberLength"] % CARD_NUMBER_SEGMENT_LENGTH
        : CARD_NUMBER_SEGMENT_LENGTH;
      return [
        [...createDigitFieldValidations(CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(lastSegmentsLength)],
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
          ...createDigitFieldValidations(CARD_EXPIRY_MONTH_LENGTH),
          {
            type: 'onBlur',
            validator: validateMonth,
            message: '유효한 월을 입력해주세요. (01 ~ 12)',
          },
        ], [
          ...createDigitFieldValidations(CARD_EXPIRY_YEAR_LENGTH)
        ],
      ]
    }
  })

  const cardValidationCodeField = useInput("", {
    validation: () => {
      const cardNetwork = getCardNetwork(cardNumberSegmentsField.values as CardNumberSegments);
      const cardValidationCodeLength = cardNetwork ? CARD_NETWORK[cardNetwork].cardValidationCodeLength : CARD_VALIDATION_CODE_DEFAULT_LENGTH;
      return [...createDigitFieldValidations(cardValidationCodeLength)]
    }
  })

  const cardPasswordField = useInput("", { validation: () => ([...createDigitFieldValidations(CARD_PASSWORD_LENGTH)]) })

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
    if (cardNumberSegmentsField.isValid) setStep(prev => Math.max(CARD_FORM_STEP['CARD_ISSUER'], prev));
    if (cardIssuerField.isValid) setStep(prev => Math.max(CARD_FORM_STEP['CARD_EXPIRY_DATE'], prev));
    if (cardExpiryDateField.isValid) setStep(prev => Math.max(CARD_FORM_STEP['CARD_VALIDATION_CODE'], prev));
    if (cardValidationCodeField.isValid) setStep(prev => Math.max(CARD_FORM_STEP['CARD_PASSWORD'], prev));
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