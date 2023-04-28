import { CREDIT_CARD_COMPANY } from "../types/card";

export const CREDIT_CARD_COMPANY_LOGO: {
  [key in CREDIT_CARD_COMPANY]: string;
} = {
  BC카드: `${process.env.PUBLIC_URL}/assets/logo-bc-card.svg`,
  하나카드: `${process.env.PUBLIC_URL}/assets/logo-hana-card.svg`,
  현대카드: `${process.env.PUBLIC_URL}/assets/logo-hyundai-card.svg`,
  카카오뱅크: `${process.env.PUBLIC_URL}/assets/logo-kakaobank.svg`,
  국민카드: `${process.env.PUBLIC_URL}/assets/logo-kookmin-card.svg`,
  롯데카드: `${process.env.PUBLIC_URL}/assets/logo-lotte-card.svg`,
  신한카드: `${process.env.PUBLIC_URL}/assets/logo-shinhan-card.svg`,
  우리카드: `${process.env.PUBLIC_URL}/assets/logo-woori-card.svg`,
};
