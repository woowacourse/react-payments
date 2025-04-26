import { useLocation } from "react-router-dom";
import Button from "../../components/Common/Button/Button";
import {
  CheckImgStyles,
  CompletionMessageStyles,
  CompletionTitleStyles,
  RegisterCompleteStyles,
} from "./RegisterComplete.styled";
import { basePath } from "../../constants/router";

export default function RegisterComplete() {
  const { state } = useLocation();
  const { cardFirstSegment, cardName } = state || {};

  const handleConfirm = () => {
    window.location.href = `${window.location.origin}${basePath}`;
  };

  return (
    <RegisterCompleteStyles>
      <CheckImgStyles src="./check.svg" alt="check" />
      <CompletionMessageStyles>
        <CompletionTitleStyles>
          {cardFirstSegment}로 시작하는
        </CompletionTitleStyles>
        <CompletionTitleStyles>
          {cardName}가 등록되었어요.
        </CompletionTitleStyles>
      </CompletionMessageStyles>
      <Button type="button" text="확인" onClick={handleConfirm} />
    </RegisterCompleteStyles>
  );
}
