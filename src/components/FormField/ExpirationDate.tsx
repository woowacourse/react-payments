import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import {
  ExpirationDateErrorState,
  ExpirationDateState,
  SetExpirationDateState,
} from '../../types/Types';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface ExpirationDateProps {
  expirationDateState: ExpirationDateState;
  setExpirationDateState: SetExpirationDateState;
  expirationDateErrorState: ExpirationDateErrorState;
}
const ExpirationDate = ({
  expirationDateState,
  setExpirationDateState,
  expirationDateErrorState,
}: ExpirationDateProps) => {
  const { month, year } = expirationDateState;
  const { setMonth, setYear } = setExpirationDateState;
  const { isMonthError, isYearError } = expirationDateErrorState;

  const expirationErrorMessage = isMonthError ? ERROR.month : isYearError ? ERROR.year : '';

  return (
    <FormField title={TITLE.expirationDate} caption={CAPTION.expirationDate}>
      <InputField label={LABEL.expirationDate} error={expirationErrorMessage}>
        <Input
          aria-label="유효기간-월"
          placeholder={PLACEHOLDER.month}
          value={month}
          maxLength={MAX_LENGTH.expirationDate}
          onChange={setMonth}
          aria-invalid={isMonthError}
        />
        <Input
          aria-label="유효기간-년도"
          placeholder={PLACEHOLDER.year}
          value={year}
          maxLength={MAX_LENGTH.expirationDate}
          onChange={setYear}
          aria-invalid={isYearError}
        />
      </InputField>
    </FormField>
  );
};

export default ExpirationDate;
