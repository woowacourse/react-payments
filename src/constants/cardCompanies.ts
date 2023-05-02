type KoreanName = `${string}${"뱅크" | "카드"}`;
type LogoFilePath = `${string}/assets/${string}.png`;
type SignatureColorHEX = `#${string}`;

const CARD_COMPANIES = {
  BC: {
    koreanName: "BC카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/BC.png`,
    signatureColor: "#F04651",
  },
  SHINHAN: {
    koreanName: "신한카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/SHINHAN.png`,
    signatureColor: "#0046FF",
  },
  HANA: {
    koreanName: "하나카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/HANA.png`,
    signatureColor: "#009490",
  },
  HYUNDAI: {
    koreanName: "현대카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/HYUNDAI.png`,
    signatureColor: "#000000",
  },
  KAKAO: {
    koreanName: "카카오뱅크",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/KAKAO.png`,
    signatureColor: "#FFE600",
  },
  KB: {
    koreanName: "국민카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/KB.png`,
    signatureColor: "#EDBA0C",
  },
  LOTTE: {
    koreanName: "롯데카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/LOTTE.png`,
    signatureColor: "#F9B0B3",
  },
  WOORI: {
    koreanName: "우리카드",
    logoFilePath: `${process.env.PUBLIC_URL}/assets/WOORI.png`,
    signatureColor: "#007BC8",
  },
} as const satisfies Record<
  string,
  { koreanName: KoreanName; logoFilePath: LogoFilePath; signatureColor: SignatureColorHEX }
>;

export default CARD_COMPANIES;
