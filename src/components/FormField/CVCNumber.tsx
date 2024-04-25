import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CVCNumberProps {
  cvcNumberState: string;
  setCVCNumberState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isCVCNumberError: boolean;
  toggleIsFocusCVCPreview: React.DispatchWithoutAction;
}

const CVCNumber = ({
  cvcNumberState,
  setCVCNumberState,
  isCVCNumberError,
  toggleIsFocusCVCPreview,
}: CVCNumberProps) => {
  return (
    <FormField title={TITLE.cvcNumber}>
      <InputField label={LABEL.cvcNumber} error={isCVCNumberError ? ERROR.cvcNumber : ''}>
        <Input
          onBlur={toggleIsFocusCVCPreview}
          onFocus={toggleIsFocusCVCPreview}
          aria-label="소유자_이름"
          placeholder={PLACEHOLDER.cvcNumber}
          value={cvcNumberState}
          maxLength={MAX_LENGTH.cvcNumber}
          onChange={setCVCNumberState}
          aria-invalid={isCVCNumberError}
        />
      </InputField>
    </FormField>
  );
};

export default CVCNumber;
