import { useState } from 'react';
import CVCNumberInputView from './CVCNumberInputView';
import { isNumeric, isValidSegment } from '../../utils/cardValidation';
import { CVCNumberInfo } from '../../types/models';

const CVC_NUMBERS_LENGTH = 3;

const CVCNumberInput = () => {
  const [cvcNumberInfo, setCvcNumberInfo] = useState<CVCNumberInfo>(() => ({
    number: '',
    isError: false,
    placeholder: '123',
    numberSegmentLength: CVC_NUMBERS_LENGTH,
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valid = isNumeric(value) && isValidSegment(value, CVC_NUMBERS_LENGTH);

    setCvcNumberInfo((prev) => ({
      ...prev,
      number: valid ? value : prev.number,
      isError: !valid,
    }));
  };

  return (
    <CVCNumberInputView
      cvcNumberInfo={cvcNumberInfo}
      handleInputChange={handleInputChange}
    />
  );
};

export default CVCNumberInput;
