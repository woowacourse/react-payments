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
  hasError: boolean;
  hasFocus: boolean;
}

type CardBrand = 'Visa' | 'MasterCard' | 'none';

interface CardInfo {
  cardNumbers: [string, string, string, string];
  cardBrand: CardBrand;
  expirationMonth: string;
  expirationYear: string;
  name: string;
}

interface CardNumbersFormSectionProps {
  changeCardNumbers: (cardNumber: string, index: number) => void;
  value: string[];
}

interface Expiration {
  [index: string]: string;
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
  changeCardNumbers: (cardNumber: string[]) => void;
  value: string[];
}

interface UseExpirationFormSectionProps {
  changeExpiration: (expiration: Expiration) => void;
}

interface UseNameFormSectionProps {
  changeName: (name: string) => void;
}

interface CardAnimationProps {
  left: number;
  top: number;
  centerX: number;
  centerY: number;
  distance: number;
}
