import CardExpirationDate from "./CardExpirationDate";

export type CardExpirationDateKeys = "month" | "year";

export type IsError = {
  month: boolean;
  year: boolean;
};

export type CardExpirationDateOptions = {
  cardExpirationDate: CardExpirationDate;
  handleCardExpirationDateChange: (
    target: CardExpirationDateKeys,
  ) => (value: string) => void;
  isError: IsError;
  errorMessage: string;
};
