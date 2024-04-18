interface PaymentsInputFieldProps {
  ref: React.RefObject<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  value?: string;
  handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PaymentsFormTitleProps {
  title: string;
  subTitle?: string;
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
