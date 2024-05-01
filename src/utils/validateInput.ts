export const validateInput = (
  value: string,
  validations: Array<{ test: (value: string) => boolean; errorMessage: string }>
) => {
  const failedTest = validations.find((validation) => !validation.test(value));

  if (failedTest) {
    return { isValid: false, errorMessage: failedTest.errorMessage };
  }
  return { isValid: true, errorMessage: '' };
};
