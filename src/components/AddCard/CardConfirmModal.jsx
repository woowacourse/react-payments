import { useContext } from "react";
import styled from "styled-components";
import { CardInfoContext } from "../../contexts/CardInfoContext";

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

export default function CardConfirmModal() {
  const {
    state: { cardNumber, holderName, expireDate },
  } = useContext(CardInfoContext);

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
          width={"244px"}
          borderBottom={"1px solid #eee"}
        />
        <Button type="submit">확인</Button>
      </StyledCardConfirmModal>
    </>
  );
}
