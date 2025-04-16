import styled from "styled-components";
import Input from "./Input";

interface InputGroupProps {
  errorMessage?: string;
  maxLength: number;
  placeholder: string;
  inputCount: number;
}

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// TODO : 에러메세지 컴포넌트 제작 및 삽입
const InputGroup = ({
  errorMessage,
  maxLength,
  placeholder,
  inputCount,
}: InputGroupProps) => {
  return (
    <InputContainer>
      {Array.from({ length: inputCount }).map((_, index) => (
        <Input
          key={index}
          maxLength={maxLength}
          placeholder={placeholder}
          isError={false}
        />
      ))}
    </InputContainer>
  );
};

export default InputGroup;
