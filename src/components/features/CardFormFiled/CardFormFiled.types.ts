import { CardBrand } from '@/constants/brandColors';

export type Action = 'CARD_NUMBER' | 'BRAND' | 'EXPIRE_DATE' | 'CVC' | 'PASSWORD';

export type CardInputItem = {
  value: string;
  isValid: boolean;
};
export type CardForm = {
  cardNumber: CardInputItem[];
  brand: CardBrand | null;
  expireDate: CardInputItem[];
  cvc: CardInputItem;
  password: CardInputItem;
};

export type CardFormFiledProps = {
  errorMessage?: string;
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CARD_FILED_CONFIG = {
  cardNumber: {
    arrLength: 4,
    valueLength: 4,
  },
  expireDate: {
    arrLength: 2,
    valueLength: 2,
  },
  cvc: {
    arrLength: 1,
    valueLength: 3,
  },
  password: {
    valueLength: 2,
  },
} as const;

export type CardFormFiled = typeof CARD_FILED_CONFIG;

export type CardFormProps = {
  /**
   * Function to be called when moving to the next step.
   */
  onNext: (value?: string) => void;
};
