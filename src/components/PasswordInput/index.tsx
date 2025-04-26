import { useCardForm } from '../../contexts/CardFormContext';
import PasswordInputView from './PasswordInputView';

const PasswordInput = () => {
  const { passwordField, handlePasswordFieldChange } = useCardForm();
  return (
    <PasswordInputView
      passwordInfo={passwordField}
      handleInputChange={handlePasswordFieldChange}
    />
  );
};

export default PasswordInput;
