import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CARD_REGISTER_SUCCESS_MESSAGE,
  GUIDE_MESSAGE,
  ROUTES,
} from "../../constants/constants";
import { CardInfoContext } from "../../contexts/CardInfoContext";
import { setCardAlias, setInitialState } from "../../reducer/cardReducer";
import { isInvalidCardAlias } from "../../validators/validator.ts";

import PageHeader from "../PageHeader";
import Button from "../UIComponents/Button/Button";
import CardPreview from "../UIComponents/CardPreview/CardPreview";
import Input from "../UIComponents/Input/Input";

const StyledCardConfirmModal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const bigCardCss = {
  width: "293px",
  height: "183px",
  fontSize: "14px",
  cardContainerMarginBottom: "25px",
  cardChipWidth: "55px",
  cardChipHeight: "35px",
  cardNameMargin: "8px 0 30px",
  cardChipMarginBottom: "20px",
  cardNumberMarginBottom: "20px",
};

const StyledCardAliasGuideMessage = styled.p`
  margin-top: 10px;
  color: #f38181;
  font-size: 14px;
`;

export default function CardConfirmModal() {
  const { state, dispatch } = useContext(CardInfoContext);
  const { cardNumber, holderName, expireDate, cardAlias } = state;

  const navigate = useNavigate();

  const handleCardAliasUpdate = ({ target: { value } }) => {
    if (isInvalidCardAlias(value)) return;

    dispatch(setCardAlias({ value }));
  };

  const handleSubmitButton = () => {
    window.alert(CARD_REGISTER_SUCCESS_MESSAGE);

    const storage = JSON.parse(localStorage.getItem("cardInfo")) ?? [];
    storage.push(state);
    localStorage.setItem("cardInfo", JSON.stringify(storage));

    dispatch(setInitialState());
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <>
      <StyledCardConfirmModal>
        <PageHeader
          fontSize={"24px"}
          lineHeight={"28.13px"}
          textAlign={"center"}
          margin={"122px 0 55px"}
        >
          카드등록이 완료되었습니다.
        </PageHeader>
        <CardPreview
          cardNumber={cardNumber}
          holderName={holderName}
          expireDate={expireDate}
          canProceed={true}
          cardCss={bigCardCss}
        />
        <Input
          name={"cardAlias"}
          value={cardAlias}
          onChange={handleCardAliasUpdate}
          width={"244px"}
          borderBottom={"1px solid #8b8b8b"}
        />
        {cardAlias.length > 0 ? (
          <Button onClick={handleSubmitButton} type="submit">
            확인
          </Button>
        ) : (
          <StyledCardAliasGuideMessage>
            {GUIDE_MESSAGE.VALID_CARD_ALIAS}
          </StyledCardAliasGuideMessage>
        )}
      </StyledCardConfirmModal>
    </>
  );
}
