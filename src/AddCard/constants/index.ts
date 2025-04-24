import type { FlowStep } from "../types/hook";
export const STEP_ORDER: FlowStep[] = [
  "CARD_NUMBER",
  "CARD_BRAND",
  "EXPIRE_DATE",
  "CVC",
  "PASSWORD",
  "COMPLETE",
];

export const STEP_ORDER_INDEX: { [key in FlowStep]: number } = {
  CARD_NUMBER: 1,
  CARD_BRAND: 2,
  EXPIRE_DATE: 3,
  CVC: 4,
  PASSWORD: 5,
  COMPLETE: 6,
};

export const STEP_LABELS = ["카드번호", "카드사", "만료일", "CVC", "비밀번호"];
