import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, useRef } from 'react';
import { LABEL, PLACEHOLDER } from '../../../../../constants/addCardForm';
import { EXP_DATE_DIGITS, EXP_DATE_WHITESPACE_CHARACTER } from '../../../../../constants/creditCard';
import { ExpDate } from '../../../../../types';
import Input from '../../../../shared/Input';
import AddCardInputContainer from '../../AddCardInputContainer';
import AddCardInputLabel from '../../AddCardInputLabel';
import { isValidExpMonth, isValidExpYear } from '../../validator';

interface Props {
  expDate: ExpDate;
  setExpDate: Dispatch<SetStateAction<ExpDate>>;
}

const ExpDateInput = ({ expDate, setExpDate }: Props) => {
  const expYearInputRef = useRef<HTMLInputElement>(null);

  const onChangeExpMonth = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpMonth(value)) return;

    setExpDate({ ...expDate, month: value });

    if (value.length === EXP_DATE_DIGITS) {
      expYearInputRef.current?.focus();
    }
  };

  const onChangeExpYear = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpYear(value)) return;

    setExpDate({ ...expDate, year: value });
  };

  const onBlurExpDate = ({ target: { value } }: FocusEvent<HTMLInputElement>, index: keyof ExpDate) => {
    if (value.length !== 1) return;

    setExpDate({ ...expDate, [index]: EXP_DATE_WHITESPACE_CHARACTER + value });
  };

  return (
    <AddCardInputLabel label={LABEL.EXP_DATE} width="40%">
      <AddCardInputContainer>
        <Input
          type="text"
          placeholder={PLACEHOLDER.MONTH}
          textCenter
          maxLength={EXP_DATE_DIGITS}
          width="40%"
          value={expDate.month}
          onChange={onChangeExpMonth}
          onBlur={event => onBlurExpDate(event, 'month')}
        />
        /
        <Input
          type="text"
          ref={expYearInputRef}
          placeholder={PLACEHOLDER.YEAR}
          textCenter
          maxLength={EXP_DATE_DIGITS}
          width="40%"
          value={expDate.year}
          onChange={onChangeExpYear}
          onBlur={event => onBlurExpDate(event, 'year')}
        />
      </AddCardInputContainer>
    </AddCardInputLabel>
  );
};

export default ExpDateInput;
