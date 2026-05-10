import { useLocation } from "react-router";
import { CARD_BRAND } from "../features/card/Constants";
import styled from "@emotion/styled";
import { RadiusButton } from "../features/card/style/Button";
import CreateComplete from "../app/assets/Check.svg";

export default function CardCreateDonePage() {
  const { cardNumber, cardBrand } = useLocation().state ?? {};
  return (
    <RootContainer>
      <CardCreateComplete>
        <CreateCompleteSVG
          src={CreateComplete}
          alt="card-create-complete"
        ></CreateCompleteSVG>
        <p>
          {cardNumber["first-digits"]}로 시작하는 {CARD_BRAND[cardBrand].title}
          카드 가 등록되었어요.
        </p>
        <RadiusButton type="button">확인</RadiusButton>
      </CardCreateComplete>
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

const CardCreateComplete = styled.div`
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
