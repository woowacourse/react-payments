import { useState } from 'react';
import { isNumeric, isValidSegment } from '../../utils/cardValidation';
import { PasswordInfo } from '../../types/models';
import PasswordInputView from './PasswordInputView';

const PASSWORD_LENGTH = 2;

const PasswordInput = () => {
  const [passwordInfo, setPasswordInfo] = useState<PasswordInfo>(() => ({
    number: '',
    isError: false,
    placeholder: '**',
    numberSegmentLength: PASSWORD_LENGTH,
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valid = isNumeric(value) && isValidSegment(value, PASSWORD_LENGTH);

    setPasswordInfo((prev) => ({
      ...prev,
      number: valid ? value : prev.number,
      isError: !valid,
    }));
  };

  return (
    <PasswordInputView
      passwordInfo={passwordInfo}
      handleInputChange={handleInputChange}
    />
  );
};

export default PasswordInput;
