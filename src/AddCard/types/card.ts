import { Brand } from "../components/AddCardForm/components/CardBrand/types";
import { CardNumberState } from "../components/AddCardForm/components/CardNumber/types";
import { ExpireDateState } from "../components/AddCardForm/components/ExpireDate/types";

interface CVCState {
  value: string;
  errorMessage: string;
}

interface PasswordState {
  value: string;
  errorMessage: string;
}

export interface CardState {
  cardNumberState: CardNumberState;
  selectedBrand: Brand | null;
  expireDate: ExpireDateState;
  CVCState: CVCState;
  passwordState: PasswordState;
}

export interface CardHandlers {
  handleCardNumberChange: (part: keyof CardNumberState, value: string) => void;
  handleExpireMonthChange: (value: string) => void;
  handleExpireYearChange: (value: string) => void;
  handleExpireMonthBlur: (value: string) => void;
  handleCVCChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
  setSelectedBrand: (brand: Brand | null) => void;
}
