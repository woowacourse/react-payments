import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";
import styled from "@emotion/styled";
import NumberInput from "./NumberInput";

interface CardCVCFormProps {
  cvc: string;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
}

function CardCVCForm({ cvc, setCvc, maxLength }: CardCVCFormProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (isExactLength(cvc, 0) || isExactLength(cvc, maxLength)) {
      setErrorText("");
    } else {
      setErrorText(maxLength + "자의 숫자만 입력 가능합니다.");
    }
  }, [cvc]);

  return (
    <>
      <Label>CVC</Label>
      <NumberInputContainer>
        <NumberInput
          value={cvc}
          setValue={setCvc}
          maxLength={maxLength}
          placeholder="123"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </>
  );
}

export default CardCVCForm;

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
