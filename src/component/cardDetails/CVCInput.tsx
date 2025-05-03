import React, { useState, useEffect } from 'react';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';

interface CVCInputProps {
  cvcValue: string;
  errorMessage: string;
  onCVCChange: (value: string) => void;
}

export const CVCInput: React.FC<CVCInputProps> = ({
  cvcValue,
  errorMessage,
  onCVCChange,
}) => {
  const [localValue, setLocalValue] = useState(cvcValue);

  useEffect(() => {
    setLocalValue(cvcValue);
  }, [cvcValue]);

  const handleLocalCVCChange = (value: string) => {
    if (value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setLocalValue(value);
    onCVCChange(value);
  };

  return (
    <>
      <Description headText="CVC 번호를 입력해 주세요" />
      <InputGroup label="CVC" errorMessages={errorMessage}>
        <Input
          maxLength={3}
          placeholder="123"
          value={localValue}
          onChange={handleLocalCVCChange}
          isError={!!errorMessage}
          name="cvcNumber"
        />
      </InputGroup>
    </>
  );
};
