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
    if (value.length === 4) {
      onComplete(value, position);
    }
  };

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    validateExpirationPeriod(value, position);
    updateExpirationPeriod(value, position);
    if (value.length === 2) {
      onComplete(value, position);
    }
  };

  const handleCvcNumberChange = (value: string) => {
    validateCvcNumber(value);
    updateCvcNumber(value);
    if (value.length === 3) {
      onComplete(value);
    }
  };

  const handleCardBrandChange = (value: string) => {
    updateCardBrand(value);
    if (value !== "") {
      onComplete(value);
    }
  };

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    updatePassword(value);
    if (value.length === 2) {
      onComplete(value);
    }
  };

  return (
    <InputGroupCSS>
      {type === INPUT_TYPE.cardNumbers && (
        <CardNumberInputs
          cardNumbers={cardNumbers}
          error={error}
          handleCardNumberChange={handleCardNumberChange}
        />
      )}
      {type === INPUT_TYPE.expirationPeriod && (
        <ExpirationPeriodInputs
          expirationPeriod={expirationPeriod}
          error={error.expirationPeriod}
          handleExpirationPeriodChange={handleExpirationPeriodChange}
        />
      )}
      {type === INPUT_TYPE.cvcNumber && (
        <CvcInput
          value={cvcNumber}
          error={error.cvcNumber}
          handleCvcNumberChange={handleCvcNumberChange}
        />
      )}
      {type === INPUT_TYPE.cardBrand && (
        <CardBrandInput
          value={cardBrand}
          handleCardBrandChange={handleCardBrandChange}
        />
      )}
      {type === INPUT_TYPE.password && (
        <PasswordInput
          value={password}
          error={error.password}
          handlePasswordChange={handlePasswordChange}
        />
      )}
    </InputGroupCSS>
  );
}
export default InputGroup;
