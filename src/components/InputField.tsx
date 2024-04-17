import styled from 'styled-components';
import { inputType } from '../types/input';
import Validation from '../domain/InputValidation';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 8px;
  gap: 8px;
`;

const Title = styled.h1`
  color: #000;
  font-size: 18px;
`;

const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
`;

const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

interface props {
  title: string;
  subtitle?: string;
  inputTypes: inputType;
}

export default function InputField({ title, subtitle, inputTypes }: props) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  return (
    <>
      <Container>
        <Title> {title} </Title>
        <SubTitle> {subtitle} </SubTitle>

        <Label> {inputTypes.inputLabel} </Label>
        <InputBox>
          {inputTypes.inputInfo.map((info, index) => (
            <Input
              key={index}
              type="text"
              maxLength={info.maxLength}
              placeholder={info.placeHolder}
              onChange={(e) => {
                try {
                  Validation[info.validateType]?.(e.target.value as string);
                  setErrorMessage('');
                } catch (error: unknown) {
                  if (error instanceof Error) {
                    setErrorMessage(error.message);
                  }
                }
              }}
            />
          ))}
        </InputBox>
        {errorMessage}
      </Container>
    </>
  );
}
