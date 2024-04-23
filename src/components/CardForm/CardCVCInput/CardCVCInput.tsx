import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber, isValidLength } from '../../../utils/validation';

interface CardCVCInputProps {
  handleCVC: (cvc: string) => void;
  handleIsCVCInput: (isCVCInput: boolean) => void;
}

const CardCVCInput = ({ handleCVC, handleIsCVCInput }: CardCVCInputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCVCFocus = () => {
    handleIsCVCInput(true);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (isValidLength(e.target.value, 3)) {
      setIsValid(true);
      setErrorMessage('');
    }

    handleCVC(e.target.value);
  };

  const handleCVCBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValid = isNumber(e.target.value) && isValidLength(e.target.value, 3);

    setIsValid(newIsValid);
    setErrorMessage(newIsValid ? '' : 'CVC 번호는 세 자리 숫자여야 합니다.');

    handleCVC(newIsValid ? e.target.value : '');
    handleIsCVCInput(false);
  };

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" inputCount={1} errorMessage={errorMessage}>
        <Input
          isValid={isValid}
          type="text"
          placeholder="123"
          maxLength={3}
          onFocus={handleCVCFocus}
          onChange={handleCVCChange}
          onBlur={handleCVCBlur}
        />
      </InputField>
    </div>
  );
};

export default CardCVCInput;
