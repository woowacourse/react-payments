import styled from 'styled-components';
import { InputInfo, InputType } from '../types/input';
import { Input } from './Input';
import FieldTitle from './FieldTitle';
import { FieldContainer } from '../style/container.style';
import { useInputField } from '../hooks/useInputField';
import useNextRef from '../hooks/useNextRef';

interface Props {
  title: string;
  subtitle?: string;
  inputTypes: InputType;
  handleInput: (value: Record<string, string>) => void;
  handleNext: () => void;
  handleComplete: (isComplete: boolean) => void;
}

export default function InputField({
  title,
  subtitle,
  inputTypes,
  handleInput,
  handleNext,
  handleComplete,
}: Props) {
  const { values, errorMessages, updateInputValue, updateErrorMessage } =
    useInputField({ inputTypes, handleComplete });
  const { inputRefs, handleInputNext } = useNextRef({ inputTypes, handleNext });

  return (
    <FieldContainer>
      <FieldTitle title={title} subtitle={subtitle} />
      <Label>{inputTypes.inputLabel}</Label>
      <InputBox>
        {inputTypes.inputInfo.map((info: InputInfo, index: number) => (
          <Input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
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
