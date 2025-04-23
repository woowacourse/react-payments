export type SequenceType = 'first' | 'second' | 'third' | 'fourth';

export interface HandleInputChangeProps {
  value: string;
  sequence: SequenceType;
}

export interface CardNumberProps {
  cardNumber: Record<SequenceType, string>;
  cardNumberErrorMessage: Record<SequenceType, string>;
  handleCardNumberInputChange: ({ value, sequence }: HandleInputChangeProps) => void;
}
