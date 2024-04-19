import { useState, useMemo } from 'react';
import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_NUMBER } from '../../constants/Condition';
import { ERROR_MESSAGE } from '../../constants/Message';
import { cardNumbersType } from '../../types/cardNumbers';

interface CardNumberInputProps {
  setCardNumbers: React.Dispatch<React.SetStateAction<cardNumbersType>>;
}

type inputValidStatesType = [boolean, boolean, boolean, boolean];

function CardNumberInput({ setCardNumbers }: CardNumberInputProps) {
  const [inputValidStates, setInputValidStates] = useState<inputValidStatesType>([true, true, true, true]);

  const errorMessage = useMemo(() => {
    return inputValidStates.every(Boolean) ? '' : ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH;
  }, [inputValidStates]);

  const validateCardNumber = (number: string) => {
    return !Number.isNaN(Number(number)) && number.length === CARD_NUMBER.MAX_LENGTH;
  };

  const onCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValidState = validateCardNumber(e.target.value);

    setInputValidStates((prev): inputValidStatesType => {
      return prev.map((prevInputValidState, index) => (index === inputIndex ? newInputValidState : prevInputValidState)) as inputValidStatesType;
    });

    setCardNumbers((prev) => {
      return prev.map((number, index) => {
        if (index === inputIndex) {
          return newInputValidState ? e.target.value : '';
        }

        return number;
      }) as cardNumbersType;
    });
  };

  return (
    <div>
      <TitleContainer title="결제할 카드 번호를 입력해 주세요." subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField label="카드 번호" length={CARD_NUMBER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        {Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, index) => (
          <Input
            key={index}
            type="text"
            maxLength={CARD_NUMBER.MAX_LENGTH}
            placeholder="1234"
            onChange={onCardNumberChange(index)}
            isValid={inputValidStates[index]}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
