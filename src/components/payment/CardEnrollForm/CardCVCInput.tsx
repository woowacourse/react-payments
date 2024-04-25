import { LabelText, TitleText } from "../../../styles/common";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import styled from "styled-components";

const CardCVCInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const CardCVCInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

interface CardCVCInputProps {
  cardCVC: string;
  errorState: { isError: boolean; errorMessage: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export default function CardCVCInput({
  cardCVC,
  errorState,
  onChange,
  onBlur,
  onFocus,
}: CardCVCInputProps) {
  return (
    <CardCVCInputContainer>
      <div>
        <TitleText>CVC 번호를 입력해 주세요</TitleText>
      </div>
      <CardCVCInputBox>
        <LabelText>CVC</LabelText>
        <InputContainer>
          <Input
            maxLength={4}
            placeholder="123"
            value={cardCVC}
            isError={errorState.isError}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardCVCInputBox>
    </CardCVCInputContainer>
  );
}
