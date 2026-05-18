import type { IssuerCodeType, IssuerInformationType } from "./types/Issuer";

export const BASE_URL = "https://woowa.yiheon.com";

export const ISSUER: Record<IssuerCodeType, IssuerInformationType> = {
  31: {
    KOR: "BC카드",
    ENG: "BC",
    COLOR: "#F04651",
  },
  41: {
    KOR: "신한카드",
    ENG: "SHINHAN",
    COLOR: "#0046FF",
  },
  15: {
    KOR: "카카오뱅크",
    ENG: "KAKAOBANK",
    COLOR: "#FFE600",
  },
  61: {
    KOR: "현대카드",
    ENG: "HYUNDAI",
    COLOR: "#000000",
  },
  W1: {
    KOR: "우리카드",
    ENG: "WOORI",
    COLOR: "#007BC8",
  },
  71: {
    KOR: "롯데카드",
    ENG: "LOTTE",
    COLOR: "#ED1C24",
  },
  21: {
    KOR: "하나카드",
    ENG: "HANA",
    COLOR: "#009490",
  },
  11: {
    KOR: "국민카드",
    ENG: "KOOKMIN",
    COLOR: "#6A6056",
  },
};
