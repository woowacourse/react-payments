import type {
  IssuerCodeType,
  IssuerKoreanNameType,
} from "../../../shared/types/CardCompany";
import { CARD_COMPANY } from "../../CardListPage/constants";

export const getIssuerCodeByCompanyName = (
  companyName: IssuerKoreanNameType | null,
): IssuerCodeType | undefined => {
  if (!companyName) {
    console.log("카드사가 존재하지 않습니다.");
    return;
  }
  const foundCompany = Object.entries(CARD_COMPANY).find(
    ([_, information]) => information.KOR === companyName,
  );

  if (!foundCompany) {
    console.log(
      `${companyName}와(과) 일치하는 카드사 코드를 찾을 수 없습니다.`,
    );
    return;
  }

  return foundCompany[0] as IssuerCodeType;
};
