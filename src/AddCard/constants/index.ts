import type { FlowStep } from "../types/hook";

export const STEP_ORDER: FlowStep[] = [
  "CARD_NUMBER",
  "CARD_BRAND",
  "EXPIRE_DATE",
  "CVC",
  "PASSWORD",
  "COMPLETE",
];

export const STEP_LABELS: Record<Exclude<FlowStep, "COMPLETE">, string> = {
  CARD_NUMBER: "카드번호",
  CARD_BRAND: "카드사",
  EXPIRE_DATE: "만료일",
  CVC: "CVC",
  PASSWORD: "비밀번호",
};
