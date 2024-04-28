import FormField from '../FormField';
import Input from '../../Input/Input';
import InputField from '../../InputField/InputField';
import MESSAGE from '../../../constants/Message';
import CONDITION from '../../../constants/Condition';
import { CVCStateType } from '../../../hooks/useCVC';

const { PLACEHOLDER, TITLE, LABEL } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CVCProps {
  cvcState: CVCStateType;
}

const CVC = ({ cvcState }: CVCProps) => {
  return (
    <FormField title={TITLE.cvc}>
      <InputField label={LABEL.cvc} error={cvcState.errorMessage}>
        <Input
          placeholder={PLACEHOLDER.cvc}
          value={cvcState.value}
          maxLength={MAX_LENGTH.cvc}
          onChange={cvcState.setValue}
          invalid={cvcState.isError}
          onFocus={() => cvcState.setIsFocus(true)}
          onBlur={() => cvcState.setIsFocus(false)}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default CVC;
