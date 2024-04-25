import { CardNumberKey } from './card';
import { ErrorDetail } from './error';

export interface UseCVCReturnType {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  errorInfo: ErrorDetail;
  isCardFront: boolean;
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseCardholderNameReturnType {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  errorInfo: ErrorDetail;
  isEnter: boolean;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface UseCardNumberReturnType {
  value: Record<CardNumberKey, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<CardNumberKey, string>>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  handleBlur: (key: CardNumberKey) => void;
  errorInfo: Record<CardNumberKey, ErrorDetail>;
  inputRefs: Record<CardNumberKey, React.RefObject<HTMLInputElement>>;
}

export interface UseExpiryDateReturnType {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorInfo: ErrorDetail;
  updateErrorMessage: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface UseCardPasswordReturnType {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorInfo: ErrorDetail;
  updateErrorMessage: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface UseSelectReturnType<T> {
  value: T;
  handleChange: (e: React.MouseEvent<HTMLLIElement>) => void;
}
