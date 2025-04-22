import { ExpireDateInputKey } from '@/hooks/useExpireDateInput';

export type CardFormFiledProps = {
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

export type CardExpireDateFiledType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>, key: ExpireDateInputKey) => void;
} & Omit<CardFormFiledProps, 'onChange' | 'onBlur'>;

export type CardFormFiledType = 'cardNumber' | 'CVC';
