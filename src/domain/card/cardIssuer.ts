export type IssuerKoreanName =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드";

export type IssuerCode = "31" | "41" | "15" | "61" | "W1" | "71" | "21" | "11";

export type IssuerInformation = {
  KOR: IssuerKoreanName;
  ENG: string;
  COLOR: string;
};

export const ISSUER: Record<IssuerCode, IssuerInformation> = {
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

export const getIssuerInformationByCode = (
  code: IssuerCode,
): IssuerInformation => {
  return ISSUER[code];
};

export const getIssuerColor = (issuerName: IssuerKoreanName | null) => {
  const foundIssuer = Object.entries(ISSUER).find(
    ([_, issuerInformation]) => issuerInformation.KOR === issuerName,
  );

  if (!foundIssuer) {
    return "#333333";
  }

  return foundIssuer[1].COLOR;
};

export const getIssuerCodeByName = (
  companyName: IssuerKoreanName | null,
): IssuerCode | undefined => {
  if (!companyName) {
    console.log("카드사가 존재하지 않습니다.");
    return;
  }
  const foundIssuer = Object.entries(ISSUER).find(
    ([_, information]) => information.KOR === companyName,
  );

  if (!foundIssuer) {
    console.log(
      `${companyName}와(과) 일치하는 카드사 코드를 찾을 수 없습니다.`,
    );
    return;
  }
  // 타입 단언 해결 필요
  return foundIssuer[0] as IssuerCode;
};
