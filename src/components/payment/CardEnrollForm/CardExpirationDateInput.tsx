import { CaptionText, LabelText, TitleText } from "../../../styles/common";
import {
  CardExpiration,
  CardExpirationErrorState,
  CardExpirationKeys,
  CardExpirationRefs,
} from "../../../hooks/useCardExpiration";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";
import { useEffect } from "react";

export interface CardExpirationDateInputProps {
  valueState: CardExpiration;
  errorState: CardExpirationErrorState;
  inputRefs: CardExpirationRefs;
  onChange: (
    targetKey: CardExpirationKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardExpirationDateInput({
  valueState,
  errorState,
  inputRefs,
  onChange,
}: CardExpirationDateInputProps) {
  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  return (
    <CardDateContainer>
      <div>
        <TitleText>카드 유효기간을 입력해 주세요</TitleText>
        <CaptionText>월/년도(MMYY)를 순서대로 입력해 주세요.</CaptionText>
      </div>
      <CardDateBox>
        <LabelText>유효기간</LabelText>
        <InputContainer>
          <Input
            ref={inputRefs[0]}
            maxLength={2}
            placeholder="MM"
            value={valueState.month}
            isError={errorState.isError.month}
            onChange={onChange("month")}
          />
          <Input
            ref={inputRefs[1]}
            maxLength={2}
            placeholder="YY"
            value={valueState.year}
            isError={errorState.isError.year}
            onChange={onChange("year")}
          />
        </InputContainer>
        <ErrorMessage message={errorState.errorMessage} />
      </CardDateBox>
    </CardDateContainer>
  );
}

const CardDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardDateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
