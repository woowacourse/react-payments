import React from 'react';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';

interface CVCInputProps {
  validateCardCVC: (value: string) => string | undefined;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  errorMessages: ErrorMessagesType;
}

export const CVCInput: React.FC<CVCInputProps> = ({
  validateCardCVC,
  setCardInput,
  handleErrorMessages,
  errorMessages,
}) => {
  return (
    <>
      <Description headText="CVC 번호를 입력해 주세요" />
      <InputGroup label="CVC" errorMessages={errorMessages.CVC}>
        <Input
          maxLength={3}
          placeholder="123"
          validate={validateCardCVC}
          setCardInput={setCardInput}
          inputKey="CVC"
          handleErrorMessage={message => handleErrorMessages('CVC', message)}
        />
      </InputGroup>
    </>
  );
};
