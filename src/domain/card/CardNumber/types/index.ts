export type SequenceType = 'first' | 'second' | 'third' | 'fourth';

export interface HandleInputChangeProps {
  index: number;
  value: string;
  sequence: SequenceType;
}

export interface CardNumberProps {
  cardNumberRefs: React.RefObject<{ [key in SequenceType]: HTMLInputElement | null }>;
  cardNumber: Record<SequenceType, string>;
  cardNumberErrorMessage: Record<SequenceType, string>;
  handleCardNumberInputChange: ({ index, value, sequence }: HandleInputChangeProps) => void;
}
