import styled from "styled-components";
import Input from "./Input";

interface InputContainerTypeProps {
  maxLength: number;
  placeholder: string;
  isError: boolean;
}

interface LabeledInputProps {
  label: string;
  inputCount: number;
  errorMessage: string;
  inputContainerType: InputContainerTypeProps;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.span`
  color: var(--color-black);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// TODO : 에러메세지 컴포넌트 제작 및 삽입
const LabeledInput = ({
  label,
  inputCount,
  errorMessage,
  inputContainerType,
}: LabeledInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        {Array.from({ length: inputCount }).map((_, index) => (
          <Input
            key={index}
            maxLength={4}
            placeholder="placeholder"
            isError={inputContainerType.isError}
          />
        ))}
      </InputContainer>
    </Container>
  );
};

export default LabeledInput;
