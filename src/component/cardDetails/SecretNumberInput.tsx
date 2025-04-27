import React, { useState, useCallback } from 'react';
import { CardInputProps } from '../../types/CardInputTypes';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { validateCardSecretNumber } from '../../validation/validation';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';

interface SecretNumberInputProps {
  errorMessages: ErrorMessagesType;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  cardInput: CardInputProps;
}

export const SecretNumberInput: React.FC<SecretNumberInputProps> = ({
  errorMessages,
  setCardInput,
  handleErrorMessages,
  cardInput,
}) => {
  const [secretValue, setSecretValue] = useState(
    cardInput.secretNumber?.toString() || '',
  );

  const handleSecretNumberChange = useCallback(
    (value: string) => {
      setSecretValue(value);

      const errorMessage = validateCardSecretNumber(value);
      if (errorMessage) {
        handleErrorMessages('secretNumber', errorMessage);
        return;
      }

      handleErrorMessages('secretNumber', '');

      setCardInput(prev => ({
        ...prev,
        secretNumber: value === '' ? null : Number(value),
      }));
    },
    [setCardInput, handleErrorMessages],
  );

  return (
    <>
      <Description
        headText="비밀번호를 입력해 주세요"
        detailText="앞의 2자리를 입력해주세요"
      />
      <InputGroup
        label="비밀번호 앞 2자리"
        errorMessages={errorMessages.secretNumber}
      >
        <Input
          maxLength={2}
          placeholder="비밀번호를 입력해주세요"
          value={secretValue}
          onChange={handleSecretNumberChange}
          isError={!!errorMessages.secretNumber}
          type="password"
          name="secretNumber"
        />
      </InputGroup>
    </>
  );
};
