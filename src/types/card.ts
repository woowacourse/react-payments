export enum CREDIT_CARD_COMPANY {
  BC_CARD = "BC카드",
  SHINHAN_CARD = "신한카드",
  KAKAOBANK = "카카오뱅크",
  HYUNDAI_CARD = "현대카드",
  WOORI_CARD = "우리카드",
  LOTTE_CARD = "롯데카드",
  HANA_CARD = "하나카드",
  KOOKMIN_CARD = "국민카드",
}

export interface CreditCard {
  originNumber: string;
  displayNumber: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [string, string];
  cardCompany: CREDIT_CARD_COMPANY | null;
  cardAlias?: string;
  isValid: boolean;
}
