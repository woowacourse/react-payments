export type IssuerKoreanNameType =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드";

export type IssuerCodeType =
  | "31"
  | "41"
  | "15"
  | "61"
  | "W1"
  | "71"
  | "21"
  | "11";

export type IssuerInformationType = {
  KOR: IssuerKoreanNameType;
  ENG: string;
  COLOR: string;
};
