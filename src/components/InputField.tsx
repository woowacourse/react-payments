import { useState } from 'react';
import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import Validation from '../domain/InputValidation';
import { Card } from '../types/card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
`;

const Title = styled.h1`
  color: #000;
  font-size: 18px;
  margin-bottom: 4px;
`;

const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
  margin-bottom: 16px;
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

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.color};
  border-radius: 3px;
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

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Label>{inputTypes.inputLabel}</Label>
        <InputBox>
          {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
            <Input
              color={errorMessages[index] ? 'red' : 'grey'}
              key={index}
              type="text"
              maxLength={info.maxLength}
              placeholder={info.placeHolder}
              onChange={(e) => {
                try {
                  Validation[info.validateType]?.(e.target.value);
                  setErrorMessages((prev) => ({ ...prev, [index]: '' }));
                  handleInput({
                    ...cardInfo,
                    [info.property]: e.target.value,
                  });
                } catch (error) {
                  if (error instanceof Error) {
                    setErrorMessages((prev) => ({
                      ...prev,
                      [index]: error.message,
                    }));
                  }
                }
              }}
            />
          ))}
        </InputBox>
        <ErrorBox>
          {Object.values(errorMessages).find((message) => message !== '')}
        </ErrorBox>
      </Container>
    </>
  );
}
