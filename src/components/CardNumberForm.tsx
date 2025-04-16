import styled from "@emotion/styled";
import NumberInput from "./NumberInput";
import { useState } from "react";

interface CardNumberFormProps {}

function CardNumberForm({}: CardNumberFormProps) {
  const [errorText, setErrorText] = useState("");

  return (
    <>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        {Array.from({ length: 4 }).map((_, idx) => (
          <NumberInput key={idx} maxLength={4} placeholder="1234" />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </>
  );
}

export default CardNumberForm;

const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const NumberInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;

const ErrorText = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
`;
