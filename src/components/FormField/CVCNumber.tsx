import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CVCNumberProps {
  cvcNumberState: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isCVCNumberError: boolean;
  setIsFocusCVCPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCNumber = ({
  cvcNumberState,
  onChange,
  isCVCNumberError,
  setIsFocusCVCPreview,
}: CVCNumberProps) => {
  return (
    <FormField title={TITLE.cvcNumber}>
      <InputField label={LABEL.cvcNumber} error={isCVCNumberError ? ERROR.cvcNumber : ''}>
        <Input
          onBlur={() => setIsFocusCVCPreview(false)}
          onFocus={() => setIsFocusCVCPreview(true)}
          aria-label="카드인증값(CVC)"
          placeholder={PLACEHOLDER.cvcNumber}
          value={cvcNumberState}
          maxLength={MAX_LENGTH.cvcNumber}
          onChange={onChange}
          aria-invalid={isCVCNumberError}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default CVCNumber;
