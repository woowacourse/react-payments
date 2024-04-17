import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import Validation from '../domain/InputValidation';
import { useState } from 'react';
import { Card } from '../types/card';

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
}: props) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  return (
    <>
      <Container>
        <Title> {title} </Title>
        <SubTitle> {subtitle} </SubTitle>

        <Label> {inputTypes.inputLabel} </Label>
        <InputBox>
          {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
            <Input
              key={index}
              type="text"
              maxLength={info.maxLength}
              placeholder={info.placeHolder}
              onChange={(e) => {
                try {
                  Validation[info.validateType]?.(e.target.value as string);
                  setErrorMessage('');
                  handleInput({
                    ...cardInfo,
                    [info.property]: e.target.value,
                  });
                  console.log(cardInfo);
                } catch (error: unknown) {
                  if (error instanceof Error) {
                    setErrorMessage(error.message);
                  }
                }
              }}
            />
          ))}
        </InputBox>
        {/* TODO: 스타일 작업 + 에러폼 보더 색상 변경 */}
        {errorMessage}
      </Container>
    </>
  );
}
