import {
  CardPositionType,
  InputType,
  PeriodPositionType,
} from "../../constants/constants";
import { useCard } from "../../hooks/useCard";
import { InputGroupCSS } from "./InputGroup.styled";
import { InputErrorType } from "../../hooks/useInputError";
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
}

function InputGroup({
  type,
  error,
  validateCardNumber,
  validateExpirationPeriod,
  validateCvcNumber,
  validatePassword,
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
  };

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
  };

  const handleCvcNumberChange = (value: string) => {
    validateCvcNumber(value);
    updateCvcNumber(value);
  };

  const handleCardBrandChange = (value: string) => {
    updateCardBrand(value);
  };

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    updatePassword(value);
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
