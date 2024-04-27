interface PaymentsInputFieldProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  value?: string;
  type?: string;
  width?: number;
  handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>[];
}

interface PaymentsFormTitleProps {
  title: string;
  subTitle?: string;
}

interface PaymentsSelectFieldProps {
  options: string[][];
  name?: string;
  placeholder?: string;
  hasError?: boolean;
  value?: string;
  handleValueChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  handleOnBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
}

interface ButtonProps {
  text: string;
  onClick?: () => void;
  floating?: boolean;
  width?: number;
}

interface InputStates {
  [key: string]: InputState;
}
interface InputState {
  value: string;
  hasFocus: boolean;
  hasError: boolean;
  isFilled?: boolean;
}

interface CardInfo {
  cardCompany: typeof CardCompany | null;
  cardNumber: [string, string, string, string];
  expirationMonth: string;
  expirationYear: string;
  name: string;
  cvc: string;
  password: string;
}

interface ChangeExpirationProps {
  month: string;
  year: string;
}

interface isValidProps {
  state: string;
  isValid: boolean;
}

type CardCompany =
  | 'BC'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'kebhana'
  | 'kbstar';

type Step =
  | 'cardCompany'
  | 'cardNumber'
  | 'expirationDate'
  | 'name'
  | 'cvc'
  | 'password';
