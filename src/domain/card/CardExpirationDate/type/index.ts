export interface CardExpirationDateProps {
  cardExpirationDate: Record<DateType, string>;
  cardExpirationDateErrorMessage: Record<DateType, string>;
  handleCardExpirationDateInputChange: ({ dateType, value }: HandleInputChangeProps) => void;
}

export type DateType = 'month' | 'year';

export interface HandleInputChangeProps {
  value: string;
  dateType: DateType;
}
