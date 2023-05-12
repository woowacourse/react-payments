export enum BankCode {
  Default = '-1',
  BCCard = '361',
  ShinHanCard = '366',
  KakaoBank = '090',
  HyunDaiCard = '367',
  WooriCard = '041',
  LotteCard = '368',
  HanaCard = '374',
  KookMinCard = '381',
}

export const CardName = {
  [BankCode.BCCard]: 'BC카드',
  [BankCode.ShinHanCard]: '신한카드',
  [BankCode.KakaoBank]: '카카오뱅크',
  [BankCode.HyunDaiCard]: '현대카드',
  [BankCode.WooriCard]: '우리카드',
  [BankCode.LotteCard]: '롯데카드',
  [BankCode.HanaCard]: '하나카드',
  [BankCode.KookMinCard]: '국민카드',
  [BankCode.Default]: '카드사',
} as const;

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
  name?: string;
  securityCode: string;
  password: Password;
  bankCode: BankCode;
  nickName?: string;
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
