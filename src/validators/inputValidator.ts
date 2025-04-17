export const inputValidation = (e: React.ChangeEvent<HTMLInputElement>, validLength: number) => {
  const inputValue = e.target.value;
  checkNumber(inputValue);
  checkValidLength(inputValue, validLength);
};

export const checkNumber = (value: string) => {
  if (!Number.isInteger(Number(value))) throw new Error(`숫자만 입력 가능합니다.`);
};

export const checkValidLength = (value: string, validLength: number) => {
  if (value.length !== validLength)
    throw new Error(`반드시 ${validLength}자리의 숫자를 입력해야 합니다.`);
};
