import { CaptionText, LabelText, TitleText } from "../styles/common";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

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

const isNumericString = (inputValue: string) => {
  const regex = /^(\d+)?$/;
  return regex.test(inputValue);
};

const validateExpirationMonthOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("월은 숫자만 입력할 수 있어요");
  }
};

const validateExpirationYearOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("년도는 숫자만 입력할 수 있어요");
  }
};

const validateExpirationMonthOnBlur = (expirationMonth: string) => {
  if (expirationMonth.length !== 2) {
    throw new Error("월을 'MM' 형식으로 입력해 주세요");
  }

  if (Number(expirationMonth) < 1 || Number(expirationMonth) > 12) {
    throw new Error("월을 01 ~ 12 범위로 입력해 주세요");
  }
};

const validateExpirationYearOnBlur = (expirationYear: string) => {
  if (expirationYear.length !== 2) {
    throw new Error("년도를 'YY' 형식으로 입력해 주세요");
  }

  if (Number(expirationYear) < 24) {
    throw new Error("유효한 년도를 입력해 주세요");
  }
};

// ---

interface CardExpirationDateProps {
  cardExpiration: CardInformation["cardExpiration"];
  onChange: (inputValue: string, inputId: string) => void;
}

export default function CardExpirationDate({
  cardExpiration,
  onChange,
}: CardExpirationDateProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const onExpirationMonthChange = (inputValue: string) => {
    try {
      validateExpirationMonthOnChange(inputValue);
      setErrorMessage("");
      onChange(inputValue, "month");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onExpirationYearChange = (inputValue: string) => {
    try {
      validateExpirationYearOnChange(inputValue);
      setErrorMessage("");
      onChange(inputValue, "year");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onExpirationMonthBlur = (inputValue: string) => {
    try {
      validateExpirationMonthOnBlur(inputValue);
      setErrorMessage("");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

  const onExpirationYearBlur = (inputValue: string) => {
    try {
      validateExpirationYearOnBlur(inputValue);
      setErrorMessage("");
      return false;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      return true;
    }
  };

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
            maxLength={2}
            placeholder="MM"
            onChange={onExpirationMonthChange}
            value={cardExpiration.month}
            onBlur={onExpirationMonthBlur}
          />
          <Input
            maxLength={2}
            placeholder="YY"
            onChange={onExpirationYearChange}
            value={cardExpiration.year}
            onBlur={onExpirationYearBlur}
          />
        </InputContainer>
        <ErrorMessage message={errorMessage}></ErrorMessage>
      </CardDateBox>
    </CardDateContainer>
  );
}
