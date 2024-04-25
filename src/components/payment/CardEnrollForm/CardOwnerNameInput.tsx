import { LabelText, TitleText } from "../../../styles/common";

import { CardOwnerNameErrorState } from "../../../hooks/useCardOwnerName";
import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";

export interface CardOwnerNameInputProps {
  valueState: string;
  errorState: CardOwnerNameErrorState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function CardOwnerNameInput({
  valueState,
  errorState,
  onChange,
  onBlur,
}: CardOwnerNameInputProps) {
  return (
    <CardOwnerNameContainer>
      <TitleText>카드 소유자 이름을 입력해 주세요</TitleText>
      <CardOwnerNameBox>
        <LabelText>소유자 이름</LabelText>
        <InputContainer>
          <Input
            maxLength={15}
            placeholder="JOHN DOE"
            value={valueState}
            isError={errorState.isError}
            onChange={onChange}
            onBlur={onBlur}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardOwnerNameBox>
    </CardOwnerNameContainer>
  );
}

const CardOwnerNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardOwnerNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
