import { CardIssuer } from './../type.d';

const ISSUER_KOREAN: { [key in CardIssuer]: string } = {
  BcCard: 'BC카드',
  ShinhanCard: '신한카드',
  KakaoBank: '카카오뱅크 카드',
  HyndaiCard: '현대카드',
  WooriCard: '우리카드',
  LotteCard: '롯데카드',
  HanaCard: '하나카드',
  KBCard: '국민카드',
};

export default ISSUER_KOREAN;
