import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useAutoFocus from '../../../hooks/useAutoFocus';

import { isNumber } from '../../../utils/validation';
import { CARD_EXPIRATION } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';
import { InputType } from '../../../hooks/useValidatedInput';

interface CardExpirationInputProps {
  month: InputType;
  year: InputType;
}

function CardExpirationInput({ month, year }: CardExpirationInputProps) {
  const { setRef, moveToNextInput } = useAutoFocus(CARD_EXPIRATION.INPUT_FIELD_COUNT, CARD_EXPIRATION.MAX_LENGTH);

  const isValid = [month.isValid, year.isValid];
  const isClicked = [month.isClicked, year.isClicked];

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    month.handleValue(e.target.value);

    moveToNextInput(e.target.value, 0);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    year.handleValue(e.target.value);
  };

  const errorMessage =
    isClicked.some(Boolean) && !isValid.every(Boolean) && JSON.stringify(isClicked) !== JSON.stringify(isValid)
      ? isValid[0]
        ? ERROR_MESSAGE.INVALID_EXPIRATION_YEAR
        : ERROR_MESSAGE.INVALID_EXPIRATION_MONTH
      : '';

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField label="유효기간" inputCount={CARD_EXPIRATION.INPUT_FIELD_COUNT} errorMessage={errorMessage}>
        <Input
          type="text"
          ref={setRef(0)}
          placeholder="MM"
          value={month.value}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleMonthChange}
          isValid={isClicked[0] ? isValid[0] : true}
          autoFocus
        />
        <Input
          type="text"
          ref={setRef(1)}
          placeholder="YY"
          value={year.value}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleYearChange}
          isValid={isClicked[1] ? isValid[1] : true}
        />
      </InputField>
    </div>
  );
}

export default CardExpirationInput;
