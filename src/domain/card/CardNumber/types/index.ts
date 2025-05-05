export type SequenceType = 'first' | 'second' | 'third' | 'fourth';

export interface HandleInputChangeProps {
  index: number;
  value: string;
  sequence: SequenceType;
}

export type CardNumberType = Record<SequenceType, string>;

export interface CardNumberProps {
  cardNumberRefs: React.RefObject<{ [key in SequenceType]: HTMLInputElement | null }>;
  cardNumber: CardNumberType;
  cardNumberErrorMessage: CardNumberType;
  handleCardNumberInputChange: ({ index, value, sequence }: HandleInputChangeProps) => void;
}
