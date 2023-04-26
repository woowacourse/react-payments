type KoreanName = `${string}${"뱅크" | "카드"}`;
type LogoFilePath = `${string}/assets/${string}.png`;

const CARD_COMPANIES = {
  BC: { koreanName: "BC카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/BC.png` },
  SHINHAN: { koreanName: "신한카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/SHINHAN.png` },
  HANA: { koreanName: "하나카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/HANA.png` },
  HYUNDAI: { koreanName: "현대카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/HYUNDAI.png` },
  KAKAO: { koreanName: "카카오뱅크", logoFilePath: `${process.env.PUBLIC_URL}/assets/KAKAO.png` },
  KB: { koreanName: "국민카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/KB.png` },
  LOTTE: { koreanName: "롯데카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/LOTTE.png` },
  WOORI: { koreanName: "우리카드", logoFilePath: `${process.env.PUBLIC_URL}/assets/WOORI.png` },
} as const satisfies Record<string, { koreanName: KoreanName; logoFilePath: LogoFilePath }>;

export default CARD_COMPANIES;
