import type { ValidityPeriod } from "@/types/card";
import type CARD from "@constants/card";

export interface CardInfoFormState extends Record<string, unknown> {
  cardNumber: string;
  validityPeriod: ValidityPeriod;
  CVC: string;
  password: string;
  selectedCardCompany:
    | (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"]
    | null;
}

export const INITIAL_CARD_INFO_FORM_STATE: CardInfoFormState = {
  cardNumber: "",
  validityPeriod: { month: "", year: "" },
  CVC: "",
  password: "",
  selectedCardCompany: null,
};
