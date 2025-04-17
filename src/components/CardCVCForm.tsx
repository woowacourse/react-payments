import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";
import styled from "@emotion/styled";
import NumberInput from "./NumberInput";
import { ERROR_MESSAGE } from "../constants/guide";

interface CardCVCFormProps {
  cardInfo: {
    cvc: string;
  };
  handleCardInfo: (
    key: keyof CardCVCFormProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardCVCForm({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardCVCFormProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (
      isExactLength(cardInfo.cvc, 0) ||
      isExactLength(cardInfo.cvc, maxLength)
    ) {
      setErrorText("");
    } else {
      setErrorText(ERROR_MESSAGE.LENGTH(maxLength));
    }
  }, [cardInfo.cvc]);

  return (
    <NumberInputForm>
      <Label>CVC</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.cvc}
          setValue={(value) => {
            handleCardInfo("cvc", value);
          }}
          maxLength={maxLength}
          placeholder="123"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
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

const NumberInputForm = styled.div`
  height: 70px;
`;
