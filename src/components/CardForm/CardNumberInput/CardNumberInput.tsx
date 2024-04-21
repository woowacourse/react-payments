import { useState, useMemo } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { CARD_NUMBER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardNumberInputProps {
  cardNumbers: string[];
  handleCardNumbers: (cardNumbers: string[]) => void;
}

function CardNumberInput({ cardNumbers, handleCardNumbers }: CardNumberInputProps) {
  const [isValid, setIsValid] = useState([true, true, true, true]);

  const errorMessage = useMemo(() => {
    return isValid.every(Boolean) ? '' : ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH;
  }, [isValid]);

  const validateCardNumber = (number: string) => {
    return !Number.isNaN(Number(number)) && number.length === CARD_NUMBER.MAX_LENGTH;
  };

  const onCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValid = validateCardNumber(e.target.value);

    setIsValid((prev) => {
      return prev.map((isValid, index) => (index === inputIndex ? isInputValid : isValid));
    });

    handleCardNumbers(
      cardNumbers.map((number, index) => {
        if (index === inputIndex) {
          return isInputValid ? e.target.value : '';
        }

        return number;
      }),
    );
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
            isValid={isValid[index]}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
