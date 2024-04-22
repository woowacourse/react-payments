import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import { CARD_NUMBER } from '../../constants/conditions';
import { cardNumbersValidStatesType } from '../../types/cardNumbers';

interface CardNumberInputProps {
  isCardNumbersValid: { validStates: cardNumbersValidStatesType; errorMessage: string };
  onChangeCardNumbers: (inputIndex: number, value: string) => void;
}

function CardNumberInput({ isCardNumbersValid, onChangeCardNumbers }: CardNumberInputProps) {
  const handleChangeCardNumber = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(CARD_NUMBER.INVALID_CHARS_REGEX, '');
    if (e.target.value.length > CARD_NUMBER.MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, CARD_NUMBER.MAX_LENGTH);
      return;
    }

    onChangeCardNumbers(inputIndex, e.target.value);
  };

  return (
    <div>
      <TitleContainer title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField
        label="카드 번호"
        length={CARD_NUMBER.INPUT_FIELD_COUNT}
        errorMessage={isCardNumbersValid.errorMessage}
      >
        {Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, index) => (
          <Input
            key={index}
            type="text"
            placeholder="1234"
            maxLength={CARD_NUMBER.MAX_LENGTH}
            onChange={handleChangeCardNumber(index)}
            isValid={isCardNumbersValid.validStates[index]}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
