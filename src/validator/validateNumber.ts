const validateNumber = (value: string) => {
  const isNumber = !isNaN(Number(value));

  if (!isNumber) {
    return { isError: true, errorMessage: '숫자를 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateNumber;
