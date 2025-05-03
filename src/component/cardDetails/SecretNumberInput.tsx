import React, { useState, useEffect } from 'react';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';

interface SecretNumberInputProps {
  secretValue: string;
  errorMessage: string;
  onSecretNumberChange: (value: string) => void;
}

export const SecretNumberInput: React.FC<SecretNumberInputProps> = ({
  secretValue,
  errorMessage,
  onSecretNumberChange,
}) => {
  const [localValue, setLocalValue] = useState(secretValue);

  useEffect(() => {
    setLocalValue(secretValue);
  }, [secretValue]);

  const handleSecretNumberChange = (value: string) => {
    if (value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setLocalValue(value);
    onSecretNumberChange(value);
  };

  return (
    <>
      <Description
        headText="비밀번호를 입력해 주세요"
        detailText="앞의 2자리를 입력해주세요"
      />
      <InputGroup label="비밀번호 앞 2자리" errorMessages={errorMessage}>
        <Input
          maxLength={2}
          placeholder="비밀번호를 입력해주세요"
          value={localValue}
          onChange={handleSecretNumberChange}
          isError={!!errorMessage}
          type="password"
          name="secretNumber"
        />
      </InputGroup>
    </>
  );
};
