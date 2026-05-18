import { ISSUER } from "../constants";
import type {
  IssuerCodeType,
  IssuerInformationType,
  IssuerKoreanNameType,
} from "../types/Issuer";

export const getIssuerByCode = (
  code: IssuerCodeType,
): IssuerInformationType => {
  return ISSUER[code];
};

export const getIssuerColor = (issuerName: IssuerKoreanNameType | null) => {
  const foundIssuer = Object.entries(ISSUER).find(
    ([_, issuerInformation]) => issuerInformation.KOR === issuerName,
  );

  if (!foundIssuer) {
    return "#333333";
  }

  return foundIssuer[1].COLOR;
};

export const getIssuerCodeByName = (
  companyName: IssuerKoreanNameType | null,
): IssuerCodeType | undefined => {
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

  return foundIssuer[0] as IssuerCodeType;
};
