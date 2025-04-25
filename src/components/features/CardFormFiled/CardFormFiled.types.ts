export type CardFormFiledProps = {
  errorMessage?: string;
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardInputType = {
  value: string;
  isValid: boolean;
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

export type FormData<T> = {
  /**
   * The state of the form field.
   */
  context: { state: T; setState: (newState: T) => void };
};
