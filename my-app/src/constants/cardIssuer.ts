export const DEFAULT_CARD_COLOR = '#333333';

export const CARD_ISSUERS = [
  {
    code: '31',
    name: 'BC카드',
    englishName: 'BC',
    color: '#F04651',
  },
  {
    code: '41',
    name: '신한카드',
    englishName: 'SHINHAN',
    color: '#0046FF',
  },
  {
    code: '15',
    name: '카카오뱅크',
    englishName: 'KAKAOBANK',
    color: '#FFE600',
  },
  {
    code: '61',
    name: '현대카드',
    englishName: 'HYUNDAI',
    color: '#000000',
  },
  {
    code: 'W1',
    name: '우리카드',
    englishName: 'WOORI',
    color: '#007BC8',
  },
  {
    code: '71',
    name: '롯데카드',
    englishName: 'LOTTE',
    color: '#ED1C24',
  },
  {
    code: '21',
    name: '하나카드',
    englishName: 'HANA',
    color: '#009490',
  },
  {
    code: '11',
    name: '국민카드',
    englishName: 'KOOKMIN',
    color: '#6A6056',
  },
] as const;

export type CardIssuerCode = (typeof CARD_ISSUERS)[number]['code'];
export type SelectedCardIssuerCode = CardIssuerCode | '';

// 선택한 옵션의 값이 실제 issuer 코드에 속하는 값인지 판단
export function isCardIssuerCode(value: string): value is CardIssuerCode {
  return CARD_ISSUERS.some((issuer) => issuer.code === value);
}
// 전달받은 issuer 코드와 일치하는 항목을 찾아내 반환
export function getCardIssuerByCode(code: string) {
  return CARD_ISSUERS.find((issuer) => issuer.code === code);
}
