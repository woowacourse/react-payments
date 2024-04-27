import { CaptionText, LabelText, TitleText } from "../../../styles/common";
import {
  CardNumberRefs,
  CardNumbers,
  CardNumbersErrorState,
} from "../../../hooks/useCardNumbers";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";
import { useEffect } from "react";

export interface CardNumbersInputProps {
  valueState: CardNumbers;
  errorState: CardNumbersErrorState;
  inputRefs: CardNumberRefs;
  onChange: (
    targetIndex: number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (
    targetCardNumberIndex: number
  ) => (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function CardNumbersInput({
  valueState,
  errorState,
  inputRefs,
  onChange,
  onBlur,
}: CardNumbersInputProps) {
  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  return (
    <CardNumbersContainer>
      <div>
        <TitleText>결제할 카드 번호를 입력해 주세요</TitleText>
        <CaptionText>본인 명의의 카드만 결제 가능합니다.</CaptionText>
      </div>
      <CardNumberBox>
        <LabelText>카드 번호</LabelText>
        <InputContainer>
          <Input
            ref={inputRefs[0]}
            maxLength={4}
            placeholder="1234"
            value={valueState[0]}
            isError={errorState.isError[0]}
            onChange={onChange(0)}
            onBlur={onBlur(0)}
          />
          <Input
            ref={inputRefs[1]}
            maxLength={4}
            placeholder="1234"
            value={valueState[1]}
            isError={errorState.isError[1]}
            onChange={onChange(1)}
            onBlur={onBlur(1)}
          />
          <Input
            ref={inputRefs[2]}
            maxLength={4}
            placeholder="1234"
            type="password"
            value={valueState[2]}
            isError={errorState.isError[2]}
            onChange={onChange(2)}
            onBlur={onBlur(2)}
          />
          <Input
            ref={inputRefs[3]}
            maxLength={4}
            placeholder="1234"
            type="password"
            value={valueState[3]}
            isError={errorState.isError[3]}
            onChange={onChange(3)}
            onBlur={onBlur(3)}
          />
        </InputContainer>
        {errorState.isError.some((isError) => isError) && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardNumberBox>
    </CardNumbersContainer>
  );
}

const CardNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;
