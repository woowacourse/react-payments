import { useLocation, useNavigate } from "react-router";
import { CARD_BRAND } from "../Constants";
import styled from "@emotion/styled";
import { RadiusButton } from "../style/Button";
import CreateCompleteCheck from "../../../app/assets/check.svg";
export default function CardCreateComplete() {
  const { firstDigitsCardNumber, cardBrand } = (useLocation().state ?? {}) as {
    firstDigitsCardNumber: string;
    cardBrand: keyof typeof CARD_BRAND;
  };
  const navigate = useNavigate();
  return (
    <RootContainer>
      <CardCreateCompleteContent>
        <CreateCompleteSVG
          src={CreateCompleteCheck}
          alt="card-create-complete"
        ></CreateCompleteSVG>
        <p>
          {firstDigitsCardNumber}로 시작하는 {CARD_BRAND[cardBrand].title}가
          등록되었어요.
        </p>
        <RadiusButton type="button" onClick={() => navigate("/card/")}>
          확인
        </RadiusButton>
      </CardCreateCompleteContent>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 19px;
`;

const CreateCompleteSVG = styled.img`
  height: 76px;
  width: 76px;
`;

const CardCreateCompleteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  p {
    font-size: 25px;
    color: #353c49;
    font-weight: 700;
  }
`;
