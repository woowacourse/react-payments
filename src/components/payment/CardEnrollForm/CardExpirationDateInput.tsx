import { CaptionText, LabelText, TitleText } from "../../../styles/common";

import { CardInformation } from "../../../types/cardInformation";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
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

interface CardExpirationDateInputProps {
  cardExpiration: CardInformation["cardExpiration"];
  errorState: {
    isError: { month: boolean; year: boolean };
    errorMessage: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    targetKey: "month" | "year"
  ) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement>,
    targetKey: "month" | "year"
  ) => void;
}

export default function CardExpirationDateInput({
  cardExpiration,
  errorState,
  onChange,
  onBlur,
}: CardExpirationDateInputProps) {
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
            onChange={(event) => onChange(event, "month")}
            onBlur={(event) => onBlur(event, "month")}
          />
          <Input
            maxLength={2}
            placeholder="YY"
            value={cardExpiration.year}
            isError={errorState.isError.year}
            onChange={(event) => onChange(event, "year")}
            onBlur={(event) => onBlur(event, "year")}
          />
        </InputContainer>
        <ErrorMessage message={errorState.errorMessage} />
      </CardDateBox>
    </CardDateContainer>
  );
}
