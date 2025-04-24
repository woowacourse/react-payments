import Button from "../../components/Common/Button/Button";
import {
  RegisterCompleteCSS,
  CheckImgCSS,
  CompletionMessageCSS,
  CompletionTitleCSS,
} from "./RegisterComplete.styled";

export default function RegisterComplete() {
  // const { state } = useLocation();
  // const { cardFirstSegment, cardCompany } = state || {};

  return (
    <RegisterCompleteCSS>
      <CheckImgCSS src="./check.svg" alt="check" />
      <CompletionMessageCSS>
        <CompletionTitleCSS>5511로 시작하는</CompletionTitleCSS>
        <CompletionTitleCSS>BC카드가 등록되었어요.</CompletionTitleCSS>
      </CompletionMessageCSS>
      <Button type="button" text="확인" />
    </RegisterCompleteCSS>
  );
}
