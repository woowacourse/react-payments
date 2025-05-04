import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validate } from '../../../../utils/validate';
import useCardContext from '../../../../hooks/useCardContext';

export interface PasswordInputProps {
  isPasswordValid: boolean;
  setIsPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordInput({
  isPasswordValid,
  setIsPasswordValid,
}: PasswordInputProps) {
  const { password, setPassword } = useCardContext();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { value } = target;

    setPassword(value);
    checkIsValidType(value);
  }

  function checkIsValidType(passwordInput: string) {
    const { isValid, message } = validate.checkNumberInput(passwordInput);
    setFeedbackMessage(message);
    setIsPasswordValid(isValid);
  }

  return (
    <>
      <InputForm
        feedbackMessage={feedbackMessage}
        title='비밀번호를 입력해 주세요.'
        description='앞의 2자리를 입력해주세요.'
        label='비밀번호 앞 2자리'
      >
        <Input
          type='password'
          name='password'
          value={password}
          handleInputChange={handlePasswordChange}
          minLength={2}
          maxLength={2}
          autoFocus={true}
          isRequired={true}
          isValidInput={isPasswordValid}
        />
      </InputForm>
    </>
  );
}

export default PasswordInput;
