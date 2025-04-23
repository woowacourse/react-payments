export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type ExpirationDate = {
  month: string;
  year: string;
};

export type CardCompany =
  | 'BC'
  | 'SHINHAN'
  | 'KAKAO'
  | 'HYUNDAI'
  | 'WOORI'
  | 'LOTTE'
  | 'HANA'
  | 'KOOKMIN';
