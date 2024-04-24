import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import { Input } from './Input';
import FieldTitle from './FieldTitle';
import { FieldContainer } from '../style/container.style';
import { useInputField } from '../hooks/useInputField';

interface Props {
  title: string;
  subtitle?: string;
  inputTypes: InputType;
  handleInput: (value: Record<string, string>) => void;
  handleNext: () => void;
}

export default function InputField({
  title,
  subtitle,
  inputTypes,
  handleInput,
  handleNext,
}: Props) {
  const { values, errorMessages, updateInputValue, updateErrorMessage } =
    useInputField();

  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputNext = (index: number) => {
    if (index < inputTypes.inputInfo.length - 1 && inputRefs.current) {
      inputRefs.current[index + 1].focus();
    }

    if (index === inputTypes.inputInfo.length - 1) {
      handleNext();
    }
  };

  return (
    <FieldContainer>
      <FieldTitle title={title} subtitle={subtitle} />
      <Label>{inputTypes.inputLabel}</Label>
      <InputBox>
        {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
          <Input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
            value={values[info.property] || ''}
            info={info}
            handleInput={(value: string) => {
              updateInputValue(info.property, value);
              handleInput({
                ...values,
                [info.property]: value,
              });
            }}
            isError={!!errorMessages[index]}
            handleErrorMessage={(errorMessage: string) =>
              updateErrorMessage(index, errorMessage)
            }
            onNext={() => handleInputNext(index)}
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
