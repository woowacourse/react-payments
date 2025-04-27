import React from 'react';
import Description from '../Description';
import Input from '../Input'; // 수정된 Input 컴포넌트 사용
import InputGroup from '../InputGroup'; // 수정된 InputGroup 컴포넌트 사용
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';

interface CVCInputProps {
  validateCardCVC: (value: string) => string | undefined;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  errorMessages: ErrorMessagesType;
}

export const CVCInput: React.FC<CVCInputProps> = ({
  validateCardCVC,
  handleErrorMessages,
  errorMessages,
  setCardInput,
}) => {
  return (
    <>
      <Description headText="CVC 번호를 입력해 주세요" />
      <InputGroup label="CVC" errorMessages={errorMessages.CVC}>
        <Input
          maxLength={3}
          placeholder="123"
          validate={validateCardCVC}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              CVC: value === '' ? null : Number(value),
            }));
          }}
          handleErrorMessage={message => handleErrorMessages('CVC', message)}
          name="cvcNumber"
        />
      </InputGroup>
    </>
  );
};
