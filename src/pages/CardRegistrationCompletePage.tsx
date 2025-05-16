import Button from "../components/@common/Button/Button";
import {completeImage, pageContainer, title} from "./CardRegistrationCompletePage.style";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {CardNumber} from "../types";
import {PATHS} from "../constants/routes.ts";

type LocationState = {
  cardNumber?: CardNumber;
  brand?: string | null;
}

function CardRegistrationCompletePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const {cardNumber, brand} = (location.state as LocationState) || {};

  if (!cardNumber || !brand) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  const handleNavigateHome = () => {
    navigate(PATHS.HOME, { replace: true });
  }

  return (
    <div css={pageContainer}>
      <div css={completeImage} />
      <h1 css={title}>
        {cardNumber.first}로 시작하는
        <br/>
        {brand}가 등록되었어요.
      </h1>
      <Button
        content='확인'
        variant="rounded"
        onClick={handleNavigateHome}
      />
    </div>
  );
}

export default CardRegistrationCompletePage;
