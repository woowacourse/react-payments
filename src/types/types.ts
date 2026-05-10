export type CardNumber = string[];
export type ExpireDate = {
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
  inputConfig: InputConfig;
  cardType: string;
}

export interface ExpireDateContextValue {
  expireDate: ExpireDate;
  expireDateError: { month: string; year: string };
  handleMonthChange: (value: string) => void;
  handleYearChange: (value: string) => void;
}

export interface CvcContextValue {
  cvc: string;
  cvcError: string;
  handleCvcChange: (value: string) => void;
}

export interface CardBrandContextValue {
  isOpen: boolean;
  selectedItem: { brand: string; color: string };
  options: { brand: string; color: string }[];
  toggleDropdown: () => void;
  handleItemClick: (option: { brand: string; color: string }) => void;
}

export interface PasswordContextValue {
  password: string;
  passwordError: string;
  handlePasswordChange: (value: string) => void;
}
