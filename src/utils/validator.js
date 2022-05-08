// TODO: refactor

const validator = ({ validatorConditions, response, result }) => {
  validatorConditions.forEach(({ checker, errorMessage }) => {
    if (checker({ response, result })) {
      throw new Error(errorMessage);
    }
  });
};

const addCardValidatorConditions = [
  {
    checker: ({ result }) => result?.error?.name === 'ValidationError',
    errorMessage: '중복된 카드가 저장되어있습니다. 확인 후 다시 등록해주세요!',
  },
  {
    checker: ({ response }) => !response.ok,
    errorMessage: '현재 홈페이지에 이상이 있습니다. 관리자에게 문의주세요~',
  },
];

const getCardsValidatorConditions = [
  {
    checker: ({ response }) => !response.ok,
    errorMessage: '현재 홈페이지에 이상이 있습니다. 관리자에게 문의주세요~',
  },
];

export { validator, addCardValidatorConditions, getCardsValidatorConditions };
