// TODO: 구체화 하기
export const getErrorMessage = (inputType: string, status: InputStatus) => {
  return status === 'INVALID' ? '잘못된 입력입니다.' : '';
};
