export const getCvcErrorMessage = (value: string) => {
  if (value !== '' && value.length !== 3) {
    return 'CVC는 3자리여야 합니다.';
  }
  return '';
};
