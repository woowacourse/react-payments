import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import Input from '../common/Input/Input';

import useInputAutoFocus from '../../hooks/useInputAutoFocus';

import { CARD_NUMBER } from '../../constants/conditions';
import { CardNumbersValidStatesType } from '../../types/CardNumbersTypes';

interface CardNumberInputProps {
  isCardNumbersValid: { validStates: CardNumbersValidStatesType; errorMessage: string };
  onChangeCardNumbers: (inputIndex: number, value: string) => void;
}

export default function CardNumberInput({ isCardNumbersValid, onChangeCardNumbers }: CardNumberInputProps) {
  const { setInputRef, focusNextInput } = useInputAutoFocus(CARD_NUMBER.INPUT_FIELD_COUNT);

  const handleChangeCardNumber = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(CARD_NUMBER.INVALID_CHARS_REGEX, '');

    if (e.target.value.length > CARD_NUMBER.MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, CARD_NUMBER.MAX_LENGTH);
      return;
    }

    if (e.target.value.length === CARD_NUMBER.MAX_LENGTH) {
      focusNextInput(inputIndex);
    }

    onChangeCardNumbers(inputIndex, e.target.value);
  };

  return (
    <div className="card-input-container">
      <TitleContainer title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField
        label="카드 번호"
        length={CARD_NUMBER.INPUT_FIELD_COUNT}
        errorMessage={isCardNumbersValid.errorMessage}
      >
        {Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, index) => (
          <Input
            key={index}
            ref={setInputRef(index)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="1234"
            maxLength={CARD_NUMBER.MAX_LENGTH}
            onChange={handleChangeCardNumber(index)}
            isValid={isCardNumbersValid.validStates[index]}
            autoFocus={index === 0}
          />
        ))}
      </InputField>
    </div>
  );
}
