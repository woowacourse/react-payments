import { ExpireDateInputKey } from '@/hooks/useExpireDateInput';

export type CardFormFiledProps = {
  errorMessage: string | null;
  onCardInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onCardInputBlur: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

export type CardExpireDateFiledType = {
  onCardExpireDateInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: ExpireDateInputKey
  ) => void;
  onCardExpireDateInputBlur: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: ExpireDateInputKey
  ) => void;
} & Pick<CardFormFiledProps, 'errorMessage'>;

export type CardFormFiledType = 'cardNumber' | 'CVC' | 'password';
