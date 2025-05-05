export interface CardExpirationDateProps {
  cardExpirationDateRefs: React.RefObject<{ [key in DateType]: HTMLInputElement | null }>;
  cardExpirationDate: Record<DateType, string>;
  cardExpirationDateErrorMessage: Record<DateType, string>;
  handleCardExpirationDateInputChange: ({ dateType, value, index }: HandleInputChangeProps) => void;
}

export type DateType = 'month' | 'year';

export interface HandleInputChangeProps {
  index: number;
  value: string;
  dateType: DateType;
}
