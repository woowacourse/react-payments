import { useState } from 'react';
import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import { Card } from '../types/card';
import Input from './Input';
import FieldTitle from './FieldTitle';
import Validation from '../domain/InputValidation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
`;

const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`;

const ErrorBox = styled.div`
  color: red;
  font-size: 9.5px;
`;

interface Props {
  title: string;
  subtitle?: string;
  inputTypes: InputType;
  cardInfo: Card;
  handleInput: (value: Card) => void;
}

export default function InputField({
  title,
  subtitle,
  inputTypes,
  cardInfo,
  handleInput,
}: Props) {

  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );
  const handleUpdateInput = (index: number, value: string) => {
    handleInput({
      ...cardInfo,
      [inputTypes.inputInfo[index].property]: value,
    });
  };

  const handleUpdateErrorMessages = (index: number, errorMessage: string) => {
    setErrorMessages((prev) => {
      return {
        ...prev,
        [index]: errorMessage,
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, info: InputInfo, index : number) => {
    try {
          Validation[info.validateType]?.(e.target.value);
          handleUpdateErrorMessages(index, '');
          handleUpdateInput(index, e.target.value);
        } catch (error) {
            if (error instanceof Error) {
            handleUpdateErrorMessages(index, error.message);
          }
        }
  };

  const checkInputError = (index : number) => {
    if(index in errorMessages){
      return errorMessages[index] !== '';
    }
    return false;
  }

  return (
      <Container>
        <FieldTitle title={title} subtitle={subtitle} />
        <Label>{inputTypes.inputLabel}</Label>
        <InputBox>
          {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
            <Input
            maxLength={info.maxLength}
            placeholder={info.placeHolder}
            onChange={(e) => handleInputChange(e, info, index)}
            isError={checkInputError(index)}
          />
          ))}
          </InputBox>
        <ErrorBox>
          {Object.values(errorMessages).find((message) => message !== '')}
        </ErrorBox>
      </Container>
  );
}
