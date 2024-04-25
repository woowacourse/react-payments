import { LabelText, TitleText } from "../../../styles/common";

import ErrorMessage from "../../common/ErrorMessage";
import Input from "../../common/Input";
import isNumericString from "../../../utils/isNumericString";
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

const validateCardCVCOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("CVC는 숫자만 입력할 수 있어요");
  }
};

const validateCardCVCOnblur = (inputValue: string) => {
  if (!(inputValue.length === 3 || inputValue.length === 4)) {
    throw new Error("CVC는 세 자리 또는 네 자리 숫자로 입력해 주세요");
  }
};

interface CardCVCInputProps {
  cardCVC: string;
  errorState: { isError: boolean; errorMessage: string };
  onChange: (inputValue: string) => void;
  onBlur: () => void;
  onFocus: () => void;
  updateErrorState: ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => void;
}

export default function CardCVCInput({
  cardCVC,
  errorState,
  onChange,
  onBlur,
  onFocus,
  updateErrorState,
}: CardCVCInputProps) {
  const onCardCVCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateCardCVCOnChange(event.target.value);
      updateErrorState({ isError: false, errorMessage: "" });
      onChange(event.target.value);
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onCardCVCBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur();
    try {
      validateCardCVCOnblur(event.target.value);
      updateErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onCardCVCFocus = () => {
    onFocus();
  };

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
            onChange={onCardCVCChange}
            onBlur={onCardCVCBlur}
            onFocus={onCardCVCFocus}
          />
        </InputContainer>
        {errorState.isError && (
          <ErrorMessage message={errorState.errorMessage} />
        )}
      </CardCVCInputBox>
    </CardCVCInputContainer>
  );
}
