import { useState } from "react";

export const CARD_COMPANY = [
  { value: "bc", label: "BC카드" },
  { value: "shinhan", label: "신한카드" },
  { value: "kakao", label: "카카오뱅크" },
  { value: "hyundai", label: "현대카드" },
  { value: "woori", label: "우리카드" },
  { value: "lotte", label: "롯데카드" },
  { value: "hana", label: "하나카드" },
  { value: "kb", label: "국민카드" },
] as const;

export type CardCompanyType = (typeof CARD_COMPANY)[number];

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
