import {
  bcLogo,
  lotteLogo,
  hdLogo,
  hanaLogo,
  kakaoLogo,
  wooriLogo,
  kbLogo,
  shinhanLogo,
} from "../assets/card_company";

export const CARD_COMPANIES = [
  { name: "신한카드", imgSrc: shinhanLogo, color: "#A6D0DD" },
  { name: "카카오카드", imgSrc: kakaoLogo, color: "#FF6969" },
  { name: "국민카드", imgSrc: kbLogo, color: "#210062" },
  { name: "하나카드", imgSrc: hanaLogo, color: "#BE6DB7" },
  { name: "우리카드", imgSrc: wooriLogo, color: "#FF75A0" },
  { name: "비씨카드", imgSrc: bcLogo, color: "#C04A82" },
  { name: "롯데카드", imgSrc: lotteLogo, color: "#009FBD" },
  { name: "현대카드", imgSrc: hdLogo, color: "#95E1D3" },
] as const;
