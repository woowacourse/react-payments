import { ChangeEvent } from "react";
import {
  CARD_POSITION,
  CardPositionType,
  INPUT_TYPE,
  InputType,
  PERIOD_POSITION,
  PeriodPositionType,
} from "../../constants/constants";
import { useCard } from "../../hooks/useCard";
import Input from "../Input/Input";
import { InputGroupCSS } from "./InputGroup.styled";
import { InputErrorType } from "../../hooks/useInputError";

export interface InputGroupProps {
  type: InputType;
  error: InputErrorType;
  setCardNumberError: (value: string, position: CardPositionType) => void;
  setExpirationPeriodError: (
    value: string,
    position: PeriodPositionType
  ) => void;
  setCvcNumberError: (value: string) => void;
}

function InputGroup({
  type,
  error,
  setCardNumberError,
  setExpirationPeriodError,
  setCvcNumberError,
}: InputGroupProps) {
  const {
    cardNumbers,
    updateCardNumber,
    expirationPeriod,
    updateExpirationPeriod,
    cvcNumber,
    updateCvcNumber,
  } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardPositionType
  ) => {
    setCardNumberError(value, position);
    updateCardNumber(value, position);
  };

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    setExpirationPeriodError(value, position);
    updateExpirationPeriod(value, position);
  };

  const handleCvcNumberChange = (value: string) => {
    setCvcNumberError(value);
    updateCvcNumber(value);
  };

  const renderInputByType = () => {
    switch (type) {
      case INPUT_TYPE.cardNumbers:
        const carNumberPlaceholder = "1234";
        return (
          <>
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error.cardNumbers.first}
              value={cardNumbers.first}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.first)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error.cardNumbers.second}
              value={cardNumbers.second}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.second)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error.cardNumbers.third}
              value={cardNumbers.third}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.third)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error.cardNumbers.fourth}
              value={cardNumbers.fourth}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.fourth)
              }
            />
          </>
        );

      case INPUT_TYPE.expirationPeriod:
        const monthPlaceholder = "MM";
        const yearPlaceholder = "YY";
        return (
          <>
            <Input
              placeholder={monthPlaceholder}
              maxLength={2}
              isError={error.expirationPeriod.month}
              value={expirationPeriod.month}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleExpirationPeriodChange(
                  e.target.value,
                  PERIOD_POSITION.month
                )
              }
            />
            <Input
              placeholder={yearPlaceholder}
              maxLength={2}
              isError={error.expirationPeriod.year}
              value={expirationPeriod.year}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleExpirationPeriodChange(
                  e.target.value,
                  PERIOD_POSITION.year
                )
              }
            />
          </>
        );

      case INPUT_TYPE.cvcNumber:
        const cvcPlaceholder = "123";
        return (
          <Input
            placeholder={cvcPlaceholder}
            maxLength={3}
            isError={error.cvcNumber}
            value={cvcNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCvcNumberChange(e.target.value)
            }
          />
        );

      default:
        null;
    }
  };

  return <InputGroupCSS>{renderInputByType()}</InputGroupCSS>;
}

export default InputGroup;
