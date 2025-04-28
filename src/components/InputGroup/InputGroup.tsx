import {
  CardPositionType,
  INPUT_TYPE,
  InputType,
  PeriodPositionType,
} from "../../constants/constants";
import { useCard } from "../../hooks/useCard";
import { InputGroupCSS } from "./InputGroup.styled";
import { InputErrorType } from "../../hooks/useInputError";
import ExpirationPeriodInputs from "../ExpirationPeriodInputs/ExpirationPeriodInputs";
import CardNumberInputs from "../CardNumberInputs/CardNumberInputs";
import CvcInput from "../CvcInput/CvcInput";
import CardBrandInput from "../CardBrandInput/CardBrandInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import InputFieldRenderer from "../InputRenderer/InputRenderer";

export interface InputGroupProps {
  type: InputType;
  error: InputErrorType;
  validateCardNumber: (value: string, position: CardPositionType) => void;
  validateExpirationPeriod: (
    value: string,
    position: PeriodPositionType
  ) => void;
  validateCvcNumber: (value: string) => void;
  validatePassword: (value: string) => void;
  onComplete: (
    value: string,
    position?: CardPositionType | PeriodPositionType
  ) => void;
}

function InputGroup({
  type,
  error,
  validateCardNumber,
  validateExpirationPeriod,
  validateCvcNumber,
  validatePassword,
  onComplete,
}: InputGroupProps) {
  const {
    cardNumbers,
    updateCardNumber,
    expirationPeriod,
    updateExpirationPeriod,
    cvcNumber,
    updateCvcNumber,
    cardBrand,
    updateCardBrand,
    password,
    updatePassword,
  } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardPositionType
  ) => {
    validateCardNumber(value, position);
    updateCardNumber(value, position);
    onComplete(value, position);
  };

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
    onComplete(value, position);
  };

  const handleCvcNumberChange = (value: string) => {
    validateCvcNumber(value);
    updateCvcNumber(value);
    onComplete(value);
  };

  const handleCardBrandChange = (value: string) => {
    updateCardBrand(value);
    onComplete(value);
  };

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    updatePassword(value);
    onComplete(value);
  };

  return (
    <InputGroupCSS>
      <InputFieldRenderer
        type={type}
        error={error}
        cardNumbers={cardNumbers}
        expirationPeriod={expirationPeriod}
        cvcNumber={cvcNumber}
        cardBrand={cardBrand}
        password={password}
        handlers={{
          handleCardNumberChange,
          handleExpirationPeriodChange,
          handleCvcNumberChange,
          handleCardBrandChange,
          handlePasswordChange,
        }}
      />
    </InputGroupCSS>
  );
}
export default InputGroup;
