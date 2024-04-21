export const validateExpirationDate = (date: string[]) => {
  const [month, year] = date.map(Number);
  const { nowMonth, nowYear } = getCurrentDate();
  const isOverdue = year < nowYear || (year === nowYear && month < nowMonth);

  const validators: Validator[] = [
    { validate: (inputs) => month >= 1 && month <= 12, errorMessage: "1~12월 범위의 월을 입력해 주세요." },
    { validate: (inputs) => !isOverdue, errorMessage: "이미 만료된 카드입니다." },
  ];
  return validate(validators, date);
};

export const validateOwnerName = (name: string[]) => {
  const validators: Validator[] = [
    { validate: (inputs) => /^[a-zA-Z\s]*$/.test(inputs[0]), errorMessage: "이름은 영어 대문자로 입력해주세요." },
    { validate: (inputs) => !/\s{2,}/.test(inputs[0]), errorMessage: "이름의 공백은 2회이상 연속되지 않아야 합니다.." },
  ];
  return validate(validators, name);
};

const getCurrentDate = () => {
  const today = new Date();
  const nowMonth = today.getMonth() + 1;
  const nowYear = today.getFullYear() - 2000;
  return { nowMonth, nowYear };
};

interface Validator {
  validate: (inputs: string[]) => boolean;
  errorMessage: string;
}

const validate = (validators: Validator[], inputs: string[]) => {
  for (const { validate, errorMessage } of validators) {
    if (!validate(inputs)) return errorMessage;
  }
  return "";
};
