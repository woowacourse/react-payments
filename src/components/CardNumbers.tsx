import { CaptionText, LabelText, TitleText } from "../styles/common";

import { CardInformation } from "../types/cardInformation";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import isNumericString from "../utils/isNumericString";
import styled from "styled-components";

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

const validateCardNumberOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("카드 번호는 숫자만 입력할 수 있어요");
  }
};

const validateCardNumberOnBlur = (inputValue: string) => {
  if (inputValue.length !== 4) {
    throw new Error("네 자리 수를 입력해주세요");
  }
};

interface CardNumbersProps {
  cardNumbers: CardInformation["cardNumbers"];
  errorState: {
    isError: boolean[];
    errorMessage: string;
  };
  onChange: (inputValue: string, targetIndex: number) => void;
  updateErrorState: ({
    isError,
    errorMessage,
  }: {
    isError: boolean[];
    errorMessage: string;
  }) => void;
}

export default function CardNumbers({
  cardNumbers,
  errorState,
  onChange,
  updateErrorState,
}: CardNumbersProps) {
  const onCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    targetCardNumberIndex: number
  ) => {
    try {
      validateCardNumberOnChange(event.target.value);
      updateErrorState({
        isError: errorState.isError.map((isError, index) =>
          index === targetCardNumberIndex ? false : isError
        ),
        errorMessage: "",
      });
      onChange(event.target.value, targetCardNumberIndex);
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: errorState.isError.map((isError, index) =>
            index === targetCardNumberIndex ? true : isError
          ),
          errorMessage: error.message,
        });
      }
    }
  };

  const onCardNumberBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    targetCardNumberIndex: number
  ) => {
    try {
      validateCardNumberOnBlur(event.target.value);
      updateErrorState({
        isError: errorState.isError.map((isError, index) =>
          index === targetCardNumberIndex ? false : isError
        ),
        errorMessage: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: errorState.isError.map((isError, index) =>
            index === targetCardNumberIndex ? true : isError
          ),
          errorMessage: error.message,
        });
      }
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
          {cardNumbers.map((cardNumber, index) => (
            <Input
              key={index}
              maxLength={4}
              placeholder="1234"
              value={cardNumber}
              isError={errorState.isError[index]}
              onChange={(event) => onCardNumberChange(event, index)}
              onBlur={(event) => onCardNumberBlur(event, index)}
            />
          ))}
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardNumberBox>
    </CardNumbersContainer>
  );
}
