import Button from "../components/@common/Button/Button";
import { Complete } from "../asset/image";
import { completeImage, pageContainer, title } from "./CardRegistrationCompletePage.style";

function CardRegistrationCompletePage() {
  return (
    <div css={pageContainer}>
      <img src={Complete} css={completeImage}/>
      <h1 css={title}>
        5511로 시작하는
        <br/>
        BC카드가 등록되었어요.
      </h1>
      <Button content='확인' style="default"/>
    </div>
  );
}

export default CardRegistrationCompletePage;
