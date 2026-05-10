export type CardNumber = string[];
export type ExpireDate = {
  month: string;
  year: string;
};

export interface CardPreviewProps {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
}

export interface CardNumberContextValue {
  cardNumber: CardNumber;
  cardNumberError: string[];
  handleCardNumberChange: (index: number, value: string) => void;
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
  selectedItem: string;
  options: string[];
  toggleDropdown: () => void;
  handleItemClick: (item: string) => void;
}
