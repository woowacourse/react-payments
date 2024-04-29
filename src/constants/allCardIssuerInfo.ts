import { AllCardIssuer, CardIssuerBackgroundColor } from '@/types';

type InitialCardIssuerInfo = {
  id: number;
  issuer: AllCardIssuer;
  value: string;
  backgroundColor: CardIssuerBackgroundColor;
};

const All_CARD_ISSUER_INFO: InitialCardIssuerInfo[] = [
  {
    id: 1,
    issuer: 'BC카드',
    value: 'bc',
    backgroundColor: 'rgba(240, 70, 81, 1)',
  },
  {
    id: 2,
    issuer: '신한카드',
    value: 'shinhan',
    backgroundColor: 'rgba(0, 70, 255, 1)',
  },
  {
    id: 3,
    issuer: '카카오뱅크',
    value: 'kakao',
    backgroundColor: 'rgba(255, 230, 0, 1)',
  },
  {
    id: 4,
    issuer: '현대카드',
    value: 'hyundai',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  {
    id: 5,
    issuer: '우리카드',
    value: 'woori',
    backgroundColor: 'rgba(0, 123, 200, 1)',
  },
  {
    id: 6,
    issuer: '롯데카드',
    value: 'lotte',
    backgroundColor: 'rgba(237, 28, 36, 1)',
  },
  {
    id: 7,
    issuer: '하나카드',
    value: 'hana',
    backgroundColor: 'rgba(0, 148, 144, 1)',
  },
  {
    id: 8,
    issuer: '국민카드',
    value: 'kb',
    backgroundColor: 'rgba(106, 96, 86, 1)',
  },
];

export default All_CARD_ISSUER_INFO;
