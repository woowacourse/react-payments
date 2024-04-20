import CARD from './card';

const validCardTypes = Object.keys(CARD.TYPE);

const ERROR_MESSAGE = {
  invalidCardType: `${validCardTypes.join(', ')} 카드만 사용할 수 있습니다.`,
  invalidCardNumberInput: '카드번호는 숫자만 입력할 수 있습니다.',
  invalidMonthInput: '월은 01에서 12 사이의 숫자만 입력할 수 있습니다.',
  invalidYearInput: '연도는 숫자만 입력할 수 있습니다.',
};

export default ERROR_MESSAGE;
