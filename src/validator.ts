interface Validator {
  (value: string);
}

const MAX_CARD_NUMBER_UNIT = 4;
const validateCardNumbers: Validator = (value) => {
  if (value.includes(" ") || Number.isNaN(Number(value))) {
    throw new Error("숫자만 입력해주세요.");
  }

  if (value.includes(".")) {
    throw new Error("소수점은 입력하실 수 없습니다.");
  }

  if (value.length > MAX_CARD_NUMBER_UNIT) {
    throw new Error("한 칸당 최대 4개의 숫자를 입력해야 합니다.");
  }
};

const MAX_NAME_LENGTH = 30;
const notAlphabet = (word: string) => /[^a-zA-Z\s]/.test(word);
const validateOwner: Validator = (value) => {
  if (notAlphabet(value)) {
    throw new Error("영어만 입력해 주세요.");
  }

  if (value.length > MAX_NAME_LENGTH) {
    throw new Error(`최대 ${MAX_NAME_LENGTH}글자까지 입력할 수 있습니다.`);
  }
};

const MAX_CARD_CODE = 3;
const validateCardCode: Validator = (value) => {
  if (value.includes(" ") || Number.isNaN(Number(value))) {
    throw new Error("숫자만 입력해주세요.");
  }

  if (value.includes(".")) {
    throw new Error("소수점은 입력하실 수 없습니다.");
  }

  if (value.length > MAX_CARD_CODE) {
    throw new Error(
      `한 칸당 최대 ${MAX_CARD_CODE}개의 숫자를 입력해야 합니다.`
    );
  }
};

const MAX_PASSWORD_UNIT = 1;
const validatePassword: Validator = (value) => {
  if (value.includes(" ") || Number.isNaN(Number(value))) {
    throw new Error("숫자만 입력해주세요.");
  }

  if (value.includes(".")) {
    throw new Error("소수점은 입력하실 수 없습니다.");
  }

  if (value.length > MAX_PASSWORD_UNIT) {
    throw new Error(
      `한 칸당 최대 ${MAX_PASSWORD_UNIT}개의 숫자를 입력해야 합니다.`
    );
  }
};

export {
  validateCardNumbers,
  validateOwner,
  validateCardCode,
  validatePassword,
};
