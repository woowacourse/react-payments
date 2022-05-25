import styled from "styled-components";
import CardPreview from "../UIComponents/CardPreview/CardPreview";

const StyledCardAlias = styled.p`
  font-size: 13px;
  text-align: center;
`;

const smallCardCss__marginBottom10px = {
  width: "213px",
  height: "133px",
  fontSize: "10px",
  cardContainerMarginBottom: "10px",
  cardChipWidth: "40px",
  cardChipHeight: "26px",
  cardNameMargin: "0 0 20px 0",
  cardChipMarginBottom: "15px",
  cardNumberMarginBottom: "12px",
};

export default function PossessCardItems() {
  const cardInfoItems = JSON.parse(localStorage.getItem("cardInfo")) ?? [];

  return cardInfoItems.map((cardInfoItem, index) => (
    <div key={index}>
      <CardPreview
        {...cardInfoItem}
        canProceed={true}
        cardCss={smallCardCss__marginBottom10px}
      />
      <StyledCardAlias>{cardInfoItem.cardAlias}</StyledCardAlias>
    </div>
  ));
}
