export const expirationDateValidators = (date: string[]): Validator[] => {
  const [month, year] = date.map(Number);
  const { nowMonth, nowYear } = getCurrentDate();
  const isOverdue = year < nowYear || (year === nowYear && month < nowMonth);

  return [
    { validate: () => year !== 0 && month !== 0, errorMessage: "" },
    { validate: () => month >= 1 && month <= 12, errorMessage: "1~12월 범위의 월을 입력해 주세요." },
    { validate: () => !isOverdue, errorMessage: "이미 만료된 카드입니다." },
  ];
};

export const ownerNameValidators = (name: string[]): Validator[] => {
  return [
    { validate: (inputs) => /^[a-zA-Z\s]*$/.test(inputs[0]), errorMessage: "이름은 영어 대문자로 입력해주세요." },
    { validate: (inputs) => !/\s{2,}/.test(inputs[0]), errorMessage: "이름의 공백은 2회이상 연속되지 않아야 합니다.." },
  ];
};

const getCurrentDate = () => {
  const today = new Date();
  const nowMonth = today.getMonth() + 1;
  const nowYear = today.getFullYear() - 2000;
  return { nowMonth, nowYear };
};

export interface Validator {
  validate: (inputs: string[]) => boolean;
  errorMessage: string;
}

export const validateAll = (validators: Validator[], inputs: string[]) => {
  for (const { validate, errorMessage } of validators) {
    if (!validate(inputs)) return errorMessage;
  }
  return "";
};

export const releaseAll = (validators: Validator[], inputs: string[], currentErrorMessages: string[]): string[] => {
  const isValids = validators.map(({ validate }) => validate(inputs));
  const newErrorMessages = [...currentErrorMessages];
  for (let i = 0; i < isValids.length; i++) {
    if (isValids[i] && validators[i].errorMessage === currentErrorMessages[i]) {
      newErrorMessages[i] = "";
    }
  }
  return newErrorMessages;
};
