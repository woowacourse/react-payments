import type { CardExpiryDate, CardNumberSegments } from "../types";
import { createDigitFieldValidations, validateCardIssuer, validateDigits, validateMonth, validateStringMaxLength, validateYear } from "../utils";
import useForm from "./useForm";

export default function useCardForm() {
  return useForm({
    initialValues: {
      cardPassword: '',
      cardValidationCode: '',
      cardExpiryDate: ['', ''] as CardExpiryDate,
      cardIssuer: null,
      cardNumberSegments: ['', '', '', ''] as CardNumberSegments,
    },
    validations: {
      cardPassword: [
        ...createDigitFieldValidations(2)
      ],
      cardValidationCode: [
        ...createDigitFieldValidations(3),
      ],
      cardExpiryDate: [
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
      ],
      cardIssuer: [
        {
          type: 'onBlur',
          validator: validateCardIssuer,
          message: "카드사를 선택해주세요"
        },
      ],
      cardNumberSegments: [
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [...createDigitFieldValidations(4)],
        [
          {
            type: 'onChange',
            validator: validateDigits,
            message: '숫자만 입력 가능합니다.'
          },
          {
            type: 'onChange',
            validator: (v) => validateStringMaxLength(v, 4),
            message: '4자리까지 입력 가능합니다.'
          },
          {
            type: 'onBlur',
            validator: (v) => v.length >= 2,
            message: '2자리 이상 입력해주세요.'
          },
        ],
      ],

    },
  })
}