export const BankCodeList = {
  BCCard: '361',
  ShinHanCard: '366',
  KakaoBank: '090',
  HyunDaiCard: '367',
  WooriCard: '041',
  LotteCard: '368',
  HanaCard: '374',
  KookMinCard: '381',
} as const;

export const CardName = {
  [BankCodeList.BCCard]: '비씨카드',
  [BankCodeList.ShinHanCard]: '신한카드',
  [BankCodeList.KakaoBank]: '카카오뱅크',
  [BankCodeList.HyunDaiCard]: '현대카드',
  [BankCodeList.WooriCard]: '우리카드',
  [BankCodeList.LotteCard]: '롯데카드',
  [BankCodeList.HanaCard]: '하나카드',
  [BankCodeList.KookMinCard]: '국민카드',
} as const;

export type BankCode = (typeof BankCodeList)[keyof typeof BankCodeList];

export type ExpirationDate = {
  year: string;
  month: string;
};

export type Password = {
  first: string;
  second: string;
};

export type Card = {
  numbers: string[];
  expirationDate: ExpirationDate;
  name: string;
  securityCode: string;
  password: Password;
  bankCode: BankCode;
};

export const isCard = (card: Partial<Card>): card is Card => {
  return (
    'numbers' in card &&
    'expirationDate' in card &&
    'securityCode' in card &&
    'password' in card &&
    'bankCode' in card
  );
};
