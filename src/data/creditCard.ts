import { CREDIT_CARD_COMPANY } from "types/card";

export const CREDIT_CARD_COMPANY_LOGO: {
  [key in CREDIT_CARD_COMPANY]: string;
} = {
  BC카드: `${process.env.PUBLIC_URL}/assets/logo-bc-card.svg`,
  신한카드: `${process.env.PUBLIC_URL}/assets/logo-shinhan-card.svg`,
  카카오뱅크: `${process.env.PUBLIC_URL}/assets/logo-kakaobank.svg`,
  현대카드: `${process.env.PUBLIC_URL}/assets/logo-hyundai-card.svg`,
  우리카드: `${process.env.PUBLIC_URL}/assets/logo-woori-card.svg`,
  롯데카드: `${process.env.PUBLIC_URL}/assets/logo-lotte-card.svg`,
  하나카드: `${process.env.PUBLIC_URL}/assets/logo-hana-card.svg`,
  국민카드: `${process.env.PUBLIC_URL}/assets/logo-kookmin-card.svg`,
};

export const CREDIT_CARD_BACKGROUND_COLOR: {
  [key in CREDIT_CARD_COMPANY]: string;
} = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#685E54",
};
