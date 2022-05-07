import styled from "styled-components";

import CardPreview from "./UIComponents/CardPreview/CardPreview";

const getPossessCardInfo = (cardInfo) => {
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

export default function PossessCardItems() {
  const cardInfo = JSON.parse(localStorage.getItem("cardInfo")) ?? [];
  const possessCardItems = getPossessCardInfo(cardInfo);

  return possessCardItems.map((cardItem, index) => (
    <div key={index}>
      <CardPreview
        {...cardItem}
        canProceed={true}
        cardContainerMarginBottom={"10px"}
      />
      <StyledCardAlias>{cardItem.cardAlias}</StyledCardAlias>
    </div>
  ));
}
