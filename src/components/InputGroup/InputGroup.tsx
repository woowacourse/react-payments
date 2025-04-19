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

const PLACEHOLDERS = {
  cardNumber: "1234",
  month: "MM",
  year: "YY",
  cvcNumber: "123",
};

const MAX_LENGTHS = {
  cardNumber: 4,
  expirationPeriod: 2,
  cvcNumber: 3,
};

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
        const cardPositions: CardPositionType[] = [
          CARD_POSITION.first,
          CARD_POSITION.second,
          CARD_POSITION.third,
          CARD_POSITION.fourth,
        ];

        return (
          <>
            {cardPositions.map((position) => {
              return (
                <Input
                  placeholder={PLACEHOLDERS.cardNumber}
                  maxLength={MAX_LENGTHS.cardNumber}
                  isError={error.cardNumbers[position]}
                  value={cardNumbers[position]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleCardNumberChange(e.target.value, position)
                  }
                />
              );
            })}
          </>
        );

      case INPUT_TYPE.expirationPeriod:
        const periodPositions: PeriodPositionType[] = [
          PERIOD_POSITION.month,
          PERIOD_POSITION.year,
        ];

        return (
          <>
            {periodPositions.map((position) => {
              return (
                <Input
                  placeholder={PLACEHOLDERS.month}
                  maxLength={MAX_LENGTHS.expirationPeriod}
                  isError={error.expirationPeriod[position]}
                  value={expirationPeriod[position]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleExpirationPeriodChange(e.target.value, position)
                  }
                />
              );
            })}
          </>
        );

      case INPUT_TYPE.cvcNumber:
        return (
          <Input
            placeholder={PLACEHOLDERS.cvcNumber}
            maxLength={MAX_LENGTHS.cvcNumber}
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
