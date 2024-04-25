import { CaptionText, LabelText, TitleText } from "../../../styles/common";

import { CardInformation } from "../../../types/cardInformation";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import isNumericString from "../../../utils/isNumericString";
import styled from "styled-components";

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

interface CardExpirationDateInputProps {
  cardExpiration: CardInformation["cardExpiration"];
  errorState: {
    isError: { month: boolean; year: boolean };
    errorMessage: string;
  };
  onChange: (inputValue: string, inputId: string) => void;
  updateErrorState: ({
    isError,
    errorMessage,
  }: {
    isError: { month: boolean; year: boolean };
    errorMessage: string;
  }) => void;
}

export default function CardExpirationDateInput({
  cardExpiration,
  errorState,
  onChange,
  updateErrorState,
}: CardExpirationDateInputProps) {
  const onExpirationMonthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      validateExpirationMonthOnChange(event.target.value);
      updateErrorState({
        isError: { ...errorState.isError, month: false },
        errorMessage: "",
      });
      onChange(event.target.value, "month");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: { ...errorState.isError, month: true },
          errorMessage: error.message,
        });
      }
    }
  };

  const onExpirationYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      validateExpirationYearOnChange(event.target.value);
      updateErrorState({
        isError: { ...errorState.isError, year: false },
        errorMessage: "",
      });
      onChange(event.target.value, "year");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: { ...errorState.isError, year: true },
          errorMessage: error.message,
        });
      }
    }
  };

  const onExpirationMonthBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateExpirationMonthOnBlur(event.target.value);
      updateErrorState({
        isError: { ...errorState.isError, month: false },
        errorMessage: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: { ...errorState.isError, month: true },
          errorMessage: error.message,
        });
      }
    }
  };

  const onExpirationYearBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateExpirationYearOnBlur(event.target.value);
      updateErrorState({
        isError: { ...errorState.isError, year: false },
        errorMessage: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({
          isError: { ...errorState.isError, year: true },
          errorMessage: error.message,
        });
      }
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
            value={cardExpiration.month}
            isError={errorState.isError.month}
            onChange={onExpirationMonthChange}
            onBlur={onExpirationMonthBlur}
          />
          <Input
            maxLength={2}
            placeholder="YY"
            value={cardExpiration.year}
            isError={errorState.isError.year}
            onChange={onExpirationYearChange}
            onBlur={onExpirationYearBlur}
          />
        </InputContainer>
        <ErrorMessage message={errorState.errorMessage} />
      </CardDateBox>
    </CardDateContainer>
  );
}
