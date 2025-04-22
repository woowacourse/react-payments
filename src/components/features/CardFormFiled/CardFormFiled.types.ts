import { ExpireDateInputKey } from '@/hooks/useExpireDateInput';

export type CardFormFiledProps = {
  errorMessage?: string;
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardExpireDateFiledType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => void;
} & Omit<CardFormFiledProps, 'onChange' | 'onBlur'>;

export type CardFormFiledType = 'cardNumber' | 'CVC';
