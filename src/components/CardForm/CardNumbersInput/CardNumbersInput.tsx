import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useAutoFocus from '../../../hooks/useAutoFocus';
import type { InputsType } from '../../../hooks/useInputs';
import { isNumber } from '../../../utils/validation';
import { CARD_NUMBER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardNumbersInputProps {
  cardNumbers: InputsType;
}

const CardNumbersInput = ({ cardNumbers }: CardNumbersInputProps) => {
  const { setRef, moveToNextInput } = useAutoFocus(CARD_NUMBER.INPUT_FIELD_COUNT, CARD_NUMBER.MAX_LENGTH);

  const handleCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    cardNumbers.handleValues(
      cardNumbers.values.map((number, index) => (index === inputIndex ? e.target.value : number)),
      inputIndex,
    );

    moveToNextInput(e.target.value, inputIndex);
  };

  const errorMessage = cardNumbers.isErrorList.some(Boolean) ? ERROR_MESSAGE.INVALID_CARD_NUMBER : '';

  return (
    <div>
      <TitleContainer title="결제할 카드 번호를 입력해 주세요." subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputField label="카드 번호" inputCount={CARD_NUMBER.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        {Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, index) => (
          <Input
            key={index}
            ref={setRef(index)}
            type="text"
            maxLength={CARD_NUMBER.MAX_LENGTH}
            placeholder="1234"
            value={cardNumbers.values[index]}
            onChange={handleCardNumberChange(index)}
            isValid={!cardNumbers.isErrorList[index]}
            autoFocus={index === 0}
          />
        ))}
      </InputField>
    </div>
  );
};

export default CardNumbersInput;
