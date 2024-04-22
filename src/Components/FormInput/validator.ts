interface cardNumbersValidatorReturn {
  isValid: boolean;
  message?: string;
  value?: number;
}

//TODO: 에러 메세지 수정
export function cardNumbersValidator(input: string): cardNumbersValidatorReturn {
  const number = Number(input);
  if (Number.isNaN(number)) return { isValid: false, message: "숫자만 입력해주세요." };
  return { isValid: true, value: number };
}
