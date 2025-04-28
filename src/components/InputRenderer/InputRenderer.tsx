import CardNumberInputs from "../CardNumberInputs/CardNumberInputs";
import ExpirationPeriodInputs from "../ExpirationPeriodInputs/ExpirationPeriodInputs";
import CvcInput from "../CvcInput/CvcInput";
import CardBrandInput from "../CardBrandInput/CardBrandInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import {
  INPUT_TYPE,
  InputType,
  CardPositionType,
  PeriodPositionType,
} from "../../constants/constants";
import { InputErrorType } from "../../hooks/useInputError";

interface InputFieldRenderer {
  type: InputType;
  error: InputErrorType;
  cardNumbers: any;
  expirationPeriod: any;
  cvcNumber: string;
  cardBrand: string;
  password: string;
  handlers: {
    handleCardNumberChange: (value: string, position: CardPositionType) => void;
    handleExpirationPeriodChange: (
      value: string,
      position: PeriodPositionType
    ) => void;
    handleCvcNumberChange: (value: string) => void;
    handleCardBrandChange: (value: string) => void;
    handlePasswordChange: (value: string) => void;
  };
}

function InputFieldRenderer({
  type,
  error,
  cardNumbers,
  expirationPeriod,
  cvcNumber,
  cardBrand,
  password,
  handlers,
}: InputFieldRenderer) {
  switch (type) {
    case INPUT_TYPE.cardNumbers:
      return (
        <CardNumberInputs
          cardNumbers={cardNumbers}
          error={error}
          handleCardNumberChange={handlers.handleCardNumberChange}
        />
      );
    case INPUT_TYPE.expirationPeriod:
      return (
        <ExpirationPeriodInputs
          expirationPeriod={expirationPeriod}
          error={error.expirationPeriod}
          handleExpirationPeriodChange={handlers.handleExpirationPeriodChange}
        />
      );
    case INPUT_TYPE.cvcNumber:
      return (
        <CvcInput
          value={cvcNumber}
          error={error.cvcNumber}
          handleCvcNumberChange={handlers.handleCvcNumberChange}
        />
      );
    case INPUT_TYPE.cardBrand:
      return (
        <CardBrandInput
          value={cardBrand}
          handleCardBrandChange={handlers.handleCardBrandChange}
        />
      );
    case INPUT_TYPE.password:
      return (
        <PasswordInput
          value={password}
          error={error.password}
          handlePasswordChange={handlers.handlePasswordChange}
        />
      );
    default:
      return null;
  }
}

export default InputFieldRenderer;
