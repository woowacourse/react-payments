import CardExpirationDate from './CardExpirationDate';

export type CardExpirationDateKeys = 'month' | 'year';

export type IsError = {
  month: boolean;
  year: boolean;
};

export type CardExpirationDateInputSectionProps = {
  cardExpirationDate: CardExpirationDate;
  setCardExpirationDate: (
    target: CardExpirationDateKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardExpirationDateBlur: (target: CardExpirationDateKeys) => void;
  isError: IsError;
  errorMessage: string;
  inputRef: {
    month: React.RefObject<HTMLInputElement | null>;
    year: React.RefObject<HTMLInputElement | null>;
  };
  handleMouseDown: (event: React.MouseEventHandler<HTMLInputElement>) => void;
};

export type CardExpirationDateOptions = CardExpirationDateInputSectionProps & {
  resetCardExpirationDate: () => void;
};
