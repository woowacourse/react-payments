export const isNumber = (value: string) => {
  const regex = /^\d*$/;
  return regex.test(value);
};

export const isEnglish = (value: string) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(value);
};

export const isOverMaxLength = (value: string, maxLength: number) => {
  return value.length > maxLength;
};

export const isInputsEmpty = (inputs: string[]) => {
  return inputs.every((input) => !input.length);
};

export const isInputsSatisfied = (inputs: string[], maxLength: number) => {
  return inputs.every((input) => input.length === maxLength);
};

export const isValidMonth = (monthValue: string) => {
  return Number(monthValue) <= 12 && Number(monthValue) >= 1;
};
