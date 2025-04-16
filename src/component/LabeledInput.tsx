import styled from "styled-components";
import Input from "./Input";
import inputContainerType from "../constants/inputContainerType";

type InputContainerTypeProps = "cardNumber" | "periodMM" | "periodYY" | "cvc";

interface LabeledInputProps {
  label: string;
  errorMessage: string;
  type: InputContainerTypeProps;
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
  errorMessage,
  type = "cardNumber",
}: LabeledInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        {Array.from({ length: inputContainerType[type].inputCount }).map(
          (_, index) => (
            <Input
              key={index}
              maxLength={inputContainerType[type].maxLength}
              placeholder={inputContainerType[type].placeholder}
              // isError={inputContainerType[]}
            />
          )
        )}
      </InputContainer>
    </Container>
  );
};

export default LabeledInput;
