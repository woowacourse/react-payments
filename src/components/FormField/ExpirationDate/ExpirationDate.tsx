import FormField from '../FormField';
import Input from '../../Input/Input';
import InputField from '../../InputField/InputField';
import MESSAGE from '../../../constants/Message';
import CONDITION from '../../../constants/Condition';
import { ExpirationDateStateType } from '../../../hooks/useExpirationDate';

const { PLACEHOLDER, TITLE, CAPTION, LABEL } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface ExpirationProps {
  expirationDateState: ExpirationDateStateType;
}

const ExpirationDate = ({ expirationDateState }: ExpirationProps) => {
  const { monthState, yearState } = expirationDateState;

  return (
    <FormField title={TITLE.expirationDate} caption={CAPTION.expirationDate}>
      <InputField label={LABEL.expirationDate} error={expirationDateState.errorMessage}>
        <>
          <Input
            placeholder={PLACEHOLDER.month}
            value={monthState.value}
            maxLength={MAX_LENGTH.expirationDate}
            onChange={monthState.setValue}
            invalid={monthState.isError}
            autoFocus
          />
          <Input
            placeholder={PLACEHOLDER.year}
            value={yearState.value}
            maxLength={MAX_LENGTH.expirationDate}
            onChange={yearState.setValue}
            invalid={yearState.isError}
          />
        </>
      </InputField>
    </FormField>
  );
};

export default ExpirationDate;
