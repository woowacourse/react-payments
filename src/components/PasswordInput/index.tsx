import { usePasswordContext } from '../../contexts/PasswordContext';
import PasswordInputView from './PasswordInputView';

const PasswordInput = () => {
  const { passwordField, handlePasswordChange, passwordInputRef } =
    usePasswordContext();
  return (
    <PasswordInputView
      passwordInfo={passwordField}
      handleInputChange={handlePasswordChange}
      inputRef={passwordInputRef}
    />
  );
};

export default PasswordInput;
