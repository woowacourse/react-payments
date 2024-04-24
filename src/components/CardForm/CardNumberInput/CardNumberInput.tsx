import { useState, useEffect } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber, isValidLength } from '../../../utils/validation';
import { CARD_NUMBER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardNumberInputProps {
  cardNumbers: string[];
  handleCardNumbers: (cardNumbers: string[]) => void;
}

function CardNumberInput({ cardNumbers, handleCardNumbers }: CardNumberInputProps) {
  const [isValid, setIsValid] = useState([true, true, true, true]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    isValid.every(Boolean) ? setErrorMessage('') : setErrorMessage(ERROR_MESSAGE.INVALID_CARD_NUMBER);
  }, [isValid]);

  const handleCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    handleCardNumbers(cardNumbers.map((number, index) => (index === inputIndex ? e.target.value : number)));
  };

  const handleCardNumberBlur = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isInputValid = isValidLength(e.target.value, CARD_NUMBER.MAX_LENGTH);

    setIsValid((prev) => prev.map((isValid, index) => (index === inputIndex ? isInputValid : isValid)));

    if (!isInputValid) {
      handleCardNumbers(cardNumbers.map((number, index) => (index === inputIndex ? '' : number)));
    }
  };

  return (
    <div>
      <TitleContainer title="결제할 카드 번호를 입력해 주세요." subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField label="카드 번호" inputCount={CARD_NUMBER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        {Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, index) => (
          <Input
            key={index}
            type="text"
            maxLength={CARD_NUMBER.MAX_LENGTH}
            placeholder="1234"
            value={cardNumbers[index]}
            onChange={handleCardNumberChange(index)}
            onBlur={handleCardNumberBlur(index)}
            isValid={isValid[index]}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
