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

export interface InputGroupProps {
  type: InputType;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputGroup({ type, error, setError }: InputGroupProps) {
  const {
    cardNumbers,
    updateCardNumber,
    expirationPeriod,
    updateExpirationPeriod,
    cvcNumber,
    setCvcNumber,
  } = useCard();

  const handleCardNumberChange = (
    value: string,
    position: CardPositionType
  ) => {
    // 유효성 검증
    updateCardNumber(value, position);
  };

  const handleExpirationPeriodChange = (
    value: string,
    position: PeriodPositionType
  ) => {
    // 유효성 검증
    updateExpirationPeriod(value, position);
  };

  const handleCvcNumberChange = (value: string) => {
    // 유효성 검증
    setCvcNumber(value);
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
              isError={error}
              value={cardNumbers.first}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.first)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
              value={cardNumbers.second}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.second)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
              value={cardNumbers.third}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleCardNumberChange(e.target.value, CARD_POSITION.third)
              }
            />
            <Input
              placeholder={carNumberPlaceholder}
              maxLength={4}
              isError={error}
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
              isError={error}
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
              isError={error}
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
            isError={error}
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
