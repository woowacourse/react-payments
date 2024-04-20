interface PaymentsInputFieldProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  value?: string;
  handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number;
}

interface PaymentsFormTitleProps {
  title: string;
  subTitle?: string;
}

interface InputStates {
  [key: string]: InputState;
}
interface InputState {
  value: string;
  hasError: boolean;
  hasFocus: boolean;
  isFilled: boolean;
}

interface CardInfo {
  cardNumber: [string, string, string, string];
  expirationMonth: string;
  expirationYear: string;
  name: string;
}
