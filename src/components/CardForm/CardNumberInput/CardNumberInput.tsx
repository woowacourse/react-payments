import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useInputs from '../../../hooks/useInputs';
import useAutoFocus from '../../../hooks/useAutoFocus';

import { isNumber } from '../../../utils/validation';
import { CARD_NUMBER } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardNumberInputProps {
  cardNumbers: string[];
  isValid: boolean[];
  handleCardNumbers: (cardNumbers: string[]) => void;
}

function CardNumberInput({ cardNumbers, isValid, handleCardNumbers }: CardNumberInputProps) {
  const { value: cardNumbersInput, isClicked, onChange: onCardNumbersInputChange } = useInputs(cardNumbers);
  const { setRef, moveToNextInput } = useAutoFocus(CARD_NUMBER.INPUT_FIELD_COUNT, CARD_NUMBER.MAX_LENGTH);

  const handleCardNumberChange = (inputIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    onCardNumbersInputChange(e, inputIndex);
    handleCardNumbers(cardNumbers.map((number, index) => (index === inputIndex ? e.target.value : number)));

    moveToNextInput(e.target.value, inputIndex);
  };

  const errorMessage =
    isClicked.some(Boolean) && !isValid.every(Boolean) && JSON.stringify(isClicked) !== JSON.stringify(isValid)
      ? ERROR_MESSAGE.INVALID_CARD_NUMBER
      : '';

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
            value={cardNumbersInput[index]}
            onChange={handleCardNumberChange(index)}
            isValid={isClicked[index] ? isValid[index] : true}
            autoFocus={index === 0}
          />
        ))}
      </InputField>
    </div>
  );
}

export default CardNumberInput;
