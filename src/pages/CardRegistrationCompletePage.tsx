import Button from "../components/@common/Button/Button";
import {completeImage, pageContainer, title} from "./CardRegistrationCompletePage.style";
import {Navigate, useLocation} from "react-router-dom";
import {CardNumber} from "../types";
import {Complete} from "../asset/image";

type LocationState = {
  cardNumber?: CardNumber;
  brand?: string | null;
}

function CardRegistrationCompletePage() {
  const location = useLocation();
  const {cardNumber, brand} = (location.state as LocationState) || {};

  if (!cardNumber || !brand) {
    return <Navigate to="/" replace />;
  }

  return (
    <div css={pageContainer}>
      <img src={Complete} alt="완료" css={completeImage} />
      <h1 css={title}>
        {cardNumber.first}로 시작하는
        <br/>
        {brand}가 등록되었어요.
      </h1>
      <Button
        content='확인'
        variant="rounded"
        onClick={() => window.location.href = '/'}
      />
    </div>
  );
}

export default CardRegistrationCompletePage;
