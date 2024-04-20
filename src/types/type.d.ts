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

type InputStates = InputState[];

interface InputState {
  value: string;
  hasError: boolean;
  hasFocus: boolean;
  isFilled: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

interface CardInfo {
  cardNumber: [string, string, string, string];
  cardBrand: CardBrand;
  expirationMonth: string;
  expirationYear: string;
  name: string;
}

interface CardNumbersFormSectionProps {
  changeCardNumber: (cardNumber: string[]) => void;
}

interface Expiration {
  month: string;
  year: string;
}
interface ExpirationFormSectionProps {
  changeExpiration: (expiration: Expiration) => void;
}

interface NameFormSectionProps {
  changeName: (name: string) => void;
}

interface UseCardNumbersFormSectionProps {
  changeCardNumber: (cardNumber: string[]) => void;
}

interface UseExpirationFormSectionProps {
  changeExpiration: (expiration: Expiration) => void;
}

interface UseNameFormSectionProps {
  changeName: (name: string) => void;
}
