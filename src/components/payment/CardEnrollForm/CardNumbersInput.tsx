import { CaptionText, LabelText, TitleText } from "../../../styles/common";
import {
  CardNumbers,
  CardNumbersErrorState,
} from "../../../hooks/useCardNumbers";
import { useEffect, useRef } from "react";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";

export interface CardNumbersInputProps {
  valueState: CardNumbers;
  errorState: CardNumbersErrorState;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    targetIndex: number
  ) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement>,
    targetCardNumberIndex: number
  ) => void;
}

export default function CardNumbersInput({
  valueState,
  errorState,
  onChange,
  onBlur,
}: CardNumbersInputProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    if (value.length < 4) {
      onChange(event, index);
      return;
    }
    if (index === 0) {
      onChange(event, index);
      secondInputRef.current?.focus();
      return;
    }
    if (index === 1) {
      onChange(event, index);
      thirdInputRef.current?.focus();
      return;
    }
    if (index === 2) {
      onChange(event, index);
      fourthInputRef.current?.focus();
      return;
    }
    if (index === 3) {
      onChange(event, index);
    }
  };

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
            ref={firstInputRef}
            maxLength={4}
            placeholder="1234"
            value={valueState[0]}
            isError={errorState.isError[0]}
            onChange={(event) => onInputChange(event, 0)}
            onBlur={(event) => onBlur(event, 0)}
          />
          <Input
            ref={secondInputRef}
            maxLength={4}
            placeholder="1234"
            value={valueState[1]}
            isError={errorState.isError[1]}
            onChange={(event) => onInputChange(event, 1)}
            onBlur={(event) => onBlur(event, 1)}
          />
          <Input
            ref={thirdInputRef}
            maxLength={4}
            placeholder="1234"
            type="password"
            value={valueState[2]}
            isError={errorState.isError[2]}
            onChange={(event) => onInputChange(event, 2)}
            onBlur={(event) => onBlur(event, 2)}
          />
          <Input
            ref={fourthInputRef}
            maxLength={4}
            placeholder="1234"
            type="password"
            value={valueState[3]}
            isError={errorState.isError[3]}
            onChange={(event) => onInputChange(event, 3)}
            onBlur={(event) => onBlur(event, 3)}
          />
        </InputContainer>
        {errorState.isError && (
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
