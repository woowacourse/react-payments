const PASSWORD_LENGTH = 2;

const validatePassword = (value: string) => {
  if (value.length !== PASSWORD_LENGTH) {
    return { isError: true, errorMessage: '비밀번호는 2자리여야 합니다' };
  }

  const isOnlyNumber = /^\d+$/.test(value);
  if (!isOnlyNumber) {
    return { isError: true, errorMessage: '비밀번호는 숫자여야 합니다' };
  }

  return { isError: false, errorMessage: '' };
};

export default validatePassword;
