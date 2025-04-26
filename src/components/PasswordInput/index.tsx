import { useInputField } from '../../hooks/useCardInputHooks';
import { validatePasswordSegment } from '../../utils/cardValidation';
import PasswordInputView from './PasswordInputView';

const PASSWORD_MAX_LENGTH = 2;

const PasswordInput = () => {
  const initialPassword = '';
  const placeholder = '**';

  const [passwordInfo, handleFieldChange] = useInputField(
    initialPassword,
    placeholder,
    PASSWORD_MAX_LENGTH,
    validatePasswordSegment
  );

  return (
    <PasswordInputView
      passwordInfo={passwordInfo}
      handleInputChange={handleFieldChange}
    />
  );
};

export default PasswordInput;
