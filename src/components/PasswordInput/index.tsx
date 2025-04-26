import { useInputField } from '../../hooks/useCardInputHooks';
import { validatePasswordSegment } from '../../utils/cardValidation';
import PasswordInputView from './PasswordInputView';

const PasswordInput = () => {
  const [fieldState, handleFieldChange] = useInputField(
    '',
    '**',
    2,
    validatePasswordSegment
  );

  return (
    <PasswordInputView
      passwordInfo={fieldState}
      handleInputChange={handleFieldChange}
    />
  );
};

export default PasswordInput;
