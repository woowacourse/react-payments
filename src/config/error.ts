export type ErrorType = 'noneCardType' | 'shortCardSegment' | 'shortCVCSegment';

export const ERROR_TYPE_TO_MESSAGE = {
  noneCardType: '유효하지 않은 카드 번호입니다. 카드 번호를 확인해주세요',
  shortCardSegment: '카드 번호는 4자리씩 입력해주세요.',
  shortCVCSegment: 'CVC 번호는 3자리씩 입력해주세요.',
};
