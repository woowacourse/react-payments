import { useState } from 'react';
import Input from '../../../common/inputForm/input/Input';
import InputForm from '../../../common/inputForm/InputForm';
import { validatorUtils } from '../../../../utils/validationUtils';

export interface CardPasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardPasswordInput({
  password,
  setPassword,
  isValid,
  setIsValid,
}: CardPasswordInputProps) {
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { value } = target;

    setPassword(value);
    checkIsValidType(value);
  }

  function checkIsValidType(passwordInput: string) {
    if (!validatorUtils.isNumber(passwordInput)) {
      setFeedbackMessage('숫자만 입력 가능합니다.');
      setIsValid(false);
    }
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
          type='tel'
          name='password'
          value={password}
          handleInputChange={handlePasswordChange}
          maxLength={2}
          autoFocus={true}
          isRequired={true}
          isValidInput={isValid}
        />
      </InputForm>
    </>
  );
}
export default CardPasswordInput;
