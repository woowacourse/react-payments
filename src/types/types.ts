export type CardNumber = string[];
export type ExpireDate = {
  month: string;
  year: string;
};
export type ExpireDateError = {
  month: string;
  year: string;
};

export interface CardPreviewProps {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
}

export type InputConfig = {
  name: string;
  placeholder: string;
  maxLength: number;
}[];

export interface CardNumberContextValue {
  cardNumber: CardNumber;
  cardNumberError: string[];
  handleCardNumberChange: (index: number, value: string) => void;
  handleBlur: (index: number) => void;
  inputConfig: InputConfig;
  cardType: string | null;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  setCardNumberServerError: (message: string) => void;
}

export interface ExpireDateContextValue {
  expireDate: ExpireDate;
  expireDateError: ExpireDateError;
  handleMonthChange: (value: string) => void;
  handleYearChange: (value: string) => void;
  handleMonthBlur: () => void;
  handleYearBlur: () => void;
  yearInputRef: React.RefObject<HTMLInputElement | null>;
  setExpireDateServerError: (message: string) => void;
}

export interface CvcContextValue {
  cvc: string;
  cvcError: string;
  handleCvcChange: (value: string) => void;
  handleBlur: () => void;
  setCvcServerError: (message: string) => void;
}

export interface CardBrandContextValue {
  isOpen: boolean;
  selectedItem: { brand: string; color: string; issuerCode: string };
  options: { brand: string; color: string; issuerCode: string }[];
  toggleDropdown: () => void;
  handleItemClick: (option: { brand: string; color: string }) => void;
}

export interface PasswordContextValue {
  password: string;
  passwordError: string;
  handlePasswordChange: (value: string) => void;
  handleBlur: () => void;
}
