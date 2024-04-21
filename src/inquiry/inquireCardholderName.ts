import { IErrorStatus } from './index.d';

const inquireCardholderName = (cardholderName: string): IErrorStatus => {
  const isEnglish = /^[a-zA-Z ]+$/.test(cardholderName);
  if (!isEnglish) {
    return { isError: true, errorMessage: '카드 소유자 이름을 영어로만 입력해주세요' };
  }

  if (cardholderName.trim() !== cardholderName) {
    return { isError: true, errorMessage: '양 끝에 공백이 포함될 수 없습니다.' };
  }

  if (cardholderName.includes('  ')) {
    return { isError: true, errorMessage: '사이 공백은 최대 한 칸 입력할 수 있습니다.' };
  }

  return { isError: false, errorMessage: '' };
};

export default inquireCardholderName;
