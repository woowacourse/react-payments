import { useState } from 'react';
import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import Input from './Input';
import FieldTitle from './FieldTitle';
import { FieldContainer } from './common/common.style';

interface Props {
  title: string;
  subtitle?: string;
  inputTypes: InputType;
  handleInput: (value: Record<string, string>) => void;
}

export default function InputField({
  title,
  subtitle,
  inputTypes,
  handleInput,
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errorMessages, setErrorMessages] = useState<Record<number, string>>(
    {}
  );

  const handleUpdateInput = (index: number, value: string) => {
    setValues({
      ...values,
      [inputTypes.inputInfo[index].property]: value,
    });
    handleInput({
      ...values,
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

  return (
    <FieldContainer>
      <FieldTitle title={title} subtitle={subtitle} />
      <Label>{inputTypes.inputLabel}</Label>
      <InputBox>
        {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
          <Input
            info={info}
            handleInput={(value) => handleUpdateInput(index, value)}
            isError={!!errorMessages[index]}
            handleErrorMessage={(errorMessage) =>
              handleUpdateErrorMessages(index, errorMessage)
            }
          />
        ))}
      </InputBox>
      <ErrorBox>
        {Object.values(errorMessages).find((message) => message !== '')}
      </ErrorBox>
    </FieldContainer>
  );
}

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
