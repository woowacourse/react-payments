import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber } from '../../../utils/validation';
import useInput from '../../../hooks/useInput';

interface CardCVCInputProps {
  cvc: string;
  isValid: boolean;
  handleCVC: (cvc: string) => void;
  handleIsCVCInput: (isCVCInput: boolean) => void;
}

const CardCVCInput = ({ cvc, isValid, handleCVC, handleIsCVCInput }: CardCVCInputProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const { value: cvcInput, onChange: onCVCInputChange } = useInput(cvc);

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (!isClicked) setIsClicked(true);

    onCVCInputChange(e);
    handleCVC(e.target.value);
  };

  const errorMessage = isValid ? '' : 'CVC 번호는 세 자리 숫자여야 합니다.';

  return (
    <div>
      <TitleContainer title="CVC 번호를 입력해 주세요" />
      <InputField label="CVC" inputCount={1} errorMessage={isClicked ? errorMessage : ''}>
        <Input
          isValid={isClicked ? isValid : true}
          type="text"
          placeholder="123"
          value={cvcInput}
          maxLength={3}
          onFocus={() => handleIsCVCInput(true)}
          onBlur={() => handleIsCVCInput(false)}
          onChange={handleCVCChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardCVCInput;
