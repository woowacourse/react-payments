import {
  validateMonth,
  validateNumberString,
  validateStringLength,
  validateStringMaxLength,
  validateYear,
} from "./validators";

export interface Validation {
  type: "validateOnChange" | "validateOnBlur";
  validator: (input: string) => boolean;
  message: string;
}

export const numericOnlyValidations: Validation[] = [
  {
    type: "validateOnChange",
    validator: validateNumberString,
    message: "숫자만 입력 가능합니다.",
  },
];

export const cardPasswordValidations = [
  {
    type: "validateOnChange",
    validator: validateNumberString,
    message: "숫자만 입력 가능합니다.",
  },
  {
    type: "validateOnChange",
    validator: (input: string) => validateStringMaxLength(input, 2),
    message: "2자리까지만 입력 가능합니다.",
  },
  {
    type: "validateOnBlur",
    validator: (input: string) => validateStringLength(input, 2),
    message: "2자리를 입력해주세요.",
  },
] as const satisfies Validation[];

export function numberSegmentValidations(maxLength: number): Validation[] {
  return [
    {
      type: "validateOnChange",
      validator: validateNumberString,
      message: "숫자만 입력 가능합니다.",
    },
    {
      type: "validateOnChange",
      validator: (input: string) => validateStringMaxLength(input, maxLength),
      message: `${maxLength}자리까지만 입력 가능합니다.`,
    },
    {
      type: "validateOnBlur",
      validator: (input: string) => validateStringLength(input, maxLength),
      message: `${maxLength}자리를 입력해주세요.`,
    },
  ];
}

export const cvcValidations = [
  {
    type: "validateOnChange",
    validator: validateNumberString,
    message: "숫자만 입력 가능합니다.",
  },
  {
    type: "validateOnChange",
    validator: (input: string) => validateStringMaxLength(input, 3),
    message: "3자리까지 입력 가능합니다.",
  },
  {
    type: "validateOnBlur",
    validator: (input: string) => validateStringLength(input, 3),
    message: "3자리를 입력해주세요.",
  },
] as const satisfies Validation[];

export function expiryDateValidations(date: "month" | "year") {
  return [
    {
      type: "validateOnChange",
      validator: validateNumberString,
      message: "숫자만 입력 가능합니다.",
    },
    {
      type: "validateOnChange",
      validator: (input: string) => validateStringMaxLength(input, 2),
      message: "2자리까지 입력 가능합니다.",
    },
    {
      type: "validateOnBlur",
      validator: (input: string) => validateStringLength(input, 2),
      message: "2자리를 입력해주세요.",
    },
    {
      type: "validateOnBlur",
      validator: date === "month" ? validateMonth : validateYear,
      message:
        date === "month"
          ? "유효한 월을 입력해주세요. (01 ~ 12)"
          : "유효한 연도을 입력해주세요.",
    },
  ] as const satisfies Validation[];
}
