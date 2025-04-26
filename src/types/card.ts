export type CardLogo = 'visa' | 'master' | '';

export type CardCompany =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드'
  | '';

export type CardExpiration = {
  month: string;
  year: string;
};

export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
