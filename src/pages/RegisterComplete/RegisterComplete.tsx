import Button from "../../components/Common/Button/Button";
import {
  RegisterCompleteStyles,
  CheckImgStyles,
  CompletionMessageStyles,
  CompletionTitleStyles,
} from "./RegisterComplete.styled";

export default function RegisterComplete() {
  // const { state } = useLocation();
  // const { cardFirstSegment, cardCompany } = state || {};

  return (
    <RegisterCompleteStyles>
      <CheckImgStyles src="./check.svg" alt="check" />
      <CompletionMessageStyles>
        <CompletionTitleStyles>5511로 시작하는</CompletionTitleStyles>
        <CompletionTitleStyles>BC카드가 등록되었어요.</CompletionTitleStyles>
      </CompletionMessageStyles>
      <Button type="button" text="확인" />
    </RegisterCompleteStyles>
  );
}
