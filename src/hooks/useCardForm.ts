import { useMemo } from "react";
import { type CardFormState, type CardNumberSegments } from "../types";
import { createDigitFieldValidations, getCardNetwork, validateCardIssuer, validateMonth } from "../utils";
import useInputGroup from "./useInputGroup";
import useInput from "./useInput";
import { CARD_EXPIRY_MONTH_LENGTH, CARD_EXPIRY_YEAR_LENGTH, CARD_NETWORK, CARD_PASSWORD_LENGTH, DEFAULT_CARD_VALIDATION_CODE_LENGTH, DEFAULT_CARD_NUMBER_LENGTH, DEFAULT_CARD_NUMBER_SEGMENT_LENGTH } from "../constants";

export const CARD_FORM_STEP = {
  CARD_PASSWORD: 4,
  CARD_VALIDATION_CODE: 3,
  CARD_EXPIRY_DATE: 2,
  CARD_ISSUER: 1,
  CARD_NUMBER: 0,
};

export default function useCardForm() {
  const cardNumberSegmentsField = useInputGroup(['', '', '', ''] as string[], {
    validation: (cardNumberSegments) => {
      const cardNetwork = getCardNetwork(cardNumberSegments as CardNumberSegments);
      const cardNumberLength = cardNetwork
        ? CARD_NETWORK[cardNetwork].cardNumberLength
        : DEFAULT_CARD_NUMBER_LENGTH;

      return [
        [...createDigitFieldValidations(DEFAULT_CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(DEFAULT_CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(DEFAULT_CARD_NUMBER_SEGMENT_LENGTH)],
        [...createDigitFieldValidations(cardNumberLength - DEFAULT_CARD_NUMBER_SEGMENT_LENGTH * 3)],
      ]
    },
  });

  const cardIssuerField = useInput<HTMLSelectElement>("", {
    validation: () => {
      return [{
        type: 'onBlur',
        validator: validateCardIssuer,
        message: "카드사를 선택해주세요"
      }]
    }
  });

  const cardExpiryDateField = useInputGroup(["", ""], {
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
      const cardValidationCodeLength = cardNetwork ? CARD_NETWORK[cardNetwork].cardValidationCodeLength : DEFAULT_CARD_VALIDATION_CODE_LENGTH;
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

  const step = useMemo(() => {
    if (cardValidationCodeField.isValid || cardPasswordField.isTouched) return CARD_FORM_STEP.CARD_PASSWORD;
    if (cardExpiryDateField.isValid || cardValidationCodeField.isTouched) return CARD_FORM_STEP.CARD_VALIDATION_CODE;
    if (cardIssuerField.isValid || cardExpiryDateField.isTouched) return CARD_FORM_STEP.CARD_EXPIRY_DATE;
    if (cardNumberSegmentsField.isValid || cardIssuerField.isTouched) return CARD_FORM_STEP.CARD_ISSUER;
    return CARD_FORM_STEP.CARD_NUMBER;
  }, [
    cardNumberSegmentsField.isValid,
    cardIssuerField.isValid, cardIssuerField.isTouched,
    cardExpiryDateField.isValid, cardExpiryDateField.isTouched,
    cardValidationCodeField.isValid, cardValidationCodeField.isTouched,
    cardPasswordField.isTouched,
  ]);

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
