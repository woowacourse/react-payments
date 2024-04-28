import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import useAutoFocus from '../../../hooks/useAutoFocus';
import { InputType } from '../../../hooks/useInput';
import { isNumber } from '../../../utils/validation';
import { CARD_EXPIRATION } from '../../../constants/Condition';
import { ERROR_MESSAGE } from '../../../constants/Message';

interface CardExpirationInputProps {
  month: InputType;
  year: InputType;
}

const CardExpirationInput = ({ month, year }: CardExpirationInputProps) => {
  const { setRef, moveToNextInput } = useAutoFocus(CARD_EXPIRATION.INPUT_FIELD_COUNT, CARD_EXPIRATION.MAX_LENGTH);

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

  const errorMessage = () => {
    if (month.isError || year.isError) {
      return month.isError ? ERROR_MESSAGE.INVALID_EXPIRATION_MONTH : ERROR_MESSAGE.INVALID_EXPIRATION_YEAR;
    }
  };

  return (
    <div>
      <TitleContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요." />
      <InputField label="유효기간" inputCount={CARD_EXPIRATION.INPUT_FIELD_COUNT} errorMessage={errorMessage()}>
        <Input
          isError={month.isError}
          type="text"
          ref={setRef(0)}
          placeholder="MM"
          value={month.value}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleMonthChange}
          autoFocus
        />
        <Input
          isError={year.isError}
          type="text"
          ref={setRef(1)}
          placeholder="YY"
          value={year.value}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
          onChange={handleYearChange}
        />
      </InputField>
    </div>
  );
};

export default CardExpirationInput;
