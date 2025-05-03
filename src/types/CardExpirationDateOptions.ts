import CardExpirationDate from "./CardExpirationDate";

export type CardExpirationDateKeys = "month" | "year";

export type IsError = {
  month: boolean;
  year: boolean;
};

export type CardExpirationDateOptions = {
  cardExpirationDate: CardExpirationDate;
  handleCardExpirationDateChange: (
    target: CardExpirationDateKeys
  ) => (
    value: string,
    index: number,
    moveFocus: (index: number) => void
  ) => void;
  isError: IsError;
  errorMessage: string;
};
