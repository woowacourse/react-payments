const PASSWORD_LENGTH = 2;

const validatePassword = (value: string) => {
  if (value.length !== PASSWORD_LENGTH) {
    return { isError: true, errorMessage: '2자리로 입력해 주세요' };
  }

  const isOnlyNumber = /^\d+$/.test(value);
  if (!isOnlyNumber) {
    return { isError: true, errorMessage: '숫자로만 입력해 주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validatePassword;
