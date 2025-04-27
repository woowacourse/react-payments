import { useCardForm } from '../../contexts/CardFormContext';
import PasswordInputView from './PasswordInputView';

const PasswordInput = () => {
  const { passwordField, handlePasswordFieldChange, passwordInputRef } = useCardForm();
  return (
    <PasswordInputView
      passwordInfo={passwordField}
      handleInputChange={handlePasswordFieldChange}
      inputRef={passwordInputRef}
    />
  );
};

export default PasswordInput;
