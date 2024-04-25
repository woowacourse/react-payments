import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { ShowNextFieldOnLastElementBlurParams } from '../../hooks/useCreateNextField';

const { TITLE, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CVCNumberProps {
  cvcNumberState: string;
  setCVCNumberState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isCVCNumberError: boolean;
  toggleIsFocusCVCPreview: React.DispatchWithoutAction;
  showNextFieldOnLastElementBlur: (params: ShowNextFieldOnLastElementBlurParams) => void;
}

const CVCNumber = ({
  cvcNumberState,
  setCVCNumberState,
  isCVCNumberError,
  toggleIsFocusCVCPreview,
  showNextFieldOnLastElementBlur,
}: CVCNumberProps) => {
  const isFill = cvcNumberState.length === MAX_LENGTH.cvcNumber;

  const onBlur = () => {
    toggleIsFocusCVCPreview();
    showNextFieldOnLastElementBlur({
      isFill,
      isFieldError: isCVCNumberError,
      nextIndex: 5,
    });
  };

  return (
    <FormField title={TITLE.cvcNumber}>
      <InputField label={LABEL.cvcNumber} error={isCVCNumberError ? ERROR.cvcNumber : ''}>
        <Input
          onBlur={onBlur}
          onFocus={toggleIsFocusCVCPreview}
          aria-label="소유자_이름"
          placeholder={PLACEHOLDER.cvcNumber}
          value={cvcNumberState}
          maxLength={MAX_LENGTH.cvcNumber}
          onChange={setCVCNumberState}
          aria-invalid={isCVCNumberError}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default CVCNumber;
