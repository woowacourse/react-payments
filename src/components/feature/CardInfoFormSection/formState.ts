import type { CardNumberUnits, ValidityPeriod } from "@/types/card";
import type { CardErrorCode } from "@apis/api/cards";
import type { CompanyKey } from "@constants/card";

import type { CVCInputStatus } from "./components/CardCVCInputField/types";
import type { InputStatus as CardNumberInputStatus } from "./components/CardNumberInputField/errorMessage";
import type { PasswordInputStatus } from "./components/CardPasswordField/types";
import type { InputStatus as ValidityPeriodInputStatus } from "./components/CardValidityPeriodInputField/errorMessage";

export type CardNumberStatusTuple =
  | [
      CardNumberInputStatus,
      CardNumberInputStatus,
      CardNumberInputStatus,
      CardNumberInputStatus,
    ]
  | [CardNumberInputStatus, CardNumberInputStatus, CardNumberInputStatus];

export type ValidityPeriodStatus = {
  [K in keyof ValidityPeriod]: ValidityPeriodInputStatus;
};

export interface CardInfoFormState {
  cardNumber: CardNumberUnits;
  validityPeriod: ValidityPeriod;
  CVC: string;
  password: string;
  selectedCardCompany: CompanyKey | null;

  cardNumberStatus: CardNumberStatusTuple;
  validityPeriodStatus: ValidityPeriodStatus;
  CVCStatus: CVCInputStatus;
  passwordStatus: PasswordInputStatus;
}

export const INITIAL_CARD_INFO_FORM_STATE: CardInfoFormState = {
  cardNumber: ["", "", "", ""],
  validityPeriod: { month: "", year: "" },
  CVC: "",
  password: "",
  selectedCardCompany: null,

  cardNumberStatus: ["DEFAULT", "DEFAULT", "DEFAULT", "DEFAULT"],
  validityPeriodStatus: { month: "DEFAULT", year: "DEFAULT" },
  CVCStatus: "DEFAULT",
  passwordStatus: "DEFAULT",
};

const ERROR_FORM_STATE_MAP: Record<
  CardErrorCode,
  Partial<CardInfoFormState>
> = {
  INVALID_CARD_NUMBER: {
    cardNumberStatus: [
      "INVALID_BRAND",
      "INVALID_BRAND",
      "INVALID_BRAND",
      "INVALID_BRAND",
    ],
  },
  INVALID_CVC: {
    CVCStatus: "ERROR",
  },
  INVALID_EXPIRATION_DATE: {
    validityPeriodStatus: {
      month: "MONTH_RANGE_ERROR",
      year: "YEAR_RANGE_ERROR",
    },
  },
};

export const getFormStateByErrorCode = (
  code: CardErrorCode,
): Partial<CardInfoFormState> => ERROR_FORM_STATE_MAP[code];
