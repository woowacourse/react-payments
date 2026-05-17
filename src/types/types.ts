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
  resetCardNumber: () => void;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
}

export interface ExpireDateContextValue {
  expireDate: ExpireDate;
  expireDateError: ExpireDateError;
  handleMonthChange: (value: string) => void;
  handleYearChange: (value: string) => void;
  handleMonthBlur: () => void;
  handleYearBlur: () => void;
  resetExpireDate: () => void;
  yearInputRef: React.RefObject<HTMLInputElement | null>;
}

export interface CvcContextValue {
  cvc: string;
  cvcError: string;
  handleCvcChange: (value: string) => void;
  handleBlur: () => void;
  resetCvc: () => void;
}

export interface CardBrandContextValue {
  isOpen: boolean;
  selectedItem: { brand: string; color: string };
  options: { brand: string; color: string }[];
  toggleDropdown: () => void;
  handleItemClick: (option: { brand: string; color: string }) => void;
  resetCardBrand: () => void;
}

export interface PasswordContextValue {
  password: string;
  passwordError: string;
  handlePasswordChange: (value: string) => void;
  handleBlur: () => void;
  resetPassword: () => void;
}
