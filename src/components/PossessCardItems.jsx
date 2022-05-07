import styled from "styled-components";

import CardPreview from "./UIComponents/CardPreview/CardPreview";

const transformToCardPreviewTemplate = (cardInfo) => {
  return cardInfo.map((info) => {
    const { cardAlias, holderName, expireDate, cardNumber } = info;
    const [month, year] = expireDate.split(",");
    const [
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
    ] = cardNumber.split(",");

    return {
      cardAlias,
      cardNumber: {
        firstCardNumber: {
          value: firstCardNumber,
        },
        secondCardNumber: {
          value: secondCardNumber,
        },
        thirdCardNumber: {
          value: thirdCardNumber,
        },
        fourthCardNumber: {
          value: fourthCardNumber,
        },
      },
      expireDate: {
        month: {
          value: month,
        },
        year: {
          value: year,
        },
      },
      holderName: {
        value: holderName,
      },
    };
  });
};

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
  const cardInfo = JSON.parse(localStorage.getItem("cardInfo")) ?? [];
  const cardInfoItems = transformToCardPreviewTemplate(cardInfo);

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
