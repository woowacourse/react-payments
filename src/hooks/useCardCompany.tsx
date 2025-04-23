import { useState } from "react";

export const CARD_COMPANY_INFO = [
  { value: "bc", label: "BC카드", color: "#F04651" },
  { value: "shinhan", label: "신한카드", color: "#0046FF" },
  { value: "kakao", label: "카카오뱅크", color: "#FFE600" },
  { value: "hyundai", label: "현대카드", color: "#000000" },
  { value: "woori", label: "우리카드", color: "#007BC8" },
  { value: "lotte", label: "롯데카드", color: "#ED1C24" },
  { value: "hana", label: "하나카드", color: "#009490" },
  { value: "kb", label: "국민카드", color: "#6A6056" },
] as const;

export type CardCompanyType = (typeof CARD_COMPANY_INFO)[number];

export default function useCardCompany() {
  const [selectedCompany, setSelectedCompany] =
    useState<CardCompanyType | null>(null);

  const selectCompany = (company: CardCompanyType) => {
    setSelectedCompany(company);
  };

  return {
    selectedCompany,
    selectCompany,
  };
}
