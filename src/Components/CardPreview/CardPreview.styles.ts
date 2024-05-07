import { css } from "@emotion/react";
import styled from "@emotion/styled";

const getCardBackgroundColor = (cardCompany: CardCompany | "") => {
  switch (cardCompany) {
    case "BC카드":
      return "#F04651";
    case "신한카드":
      return "#0046FF";
    case "카카오뱅크":
      return "#FFE600";
    case "현대카드":
      return "#000000";
    case "우리카드":
      return "#007BC8";
    case "롯데카드":
      return "#ED1C24";
    case "하나카드":
      return "#009490";
    case "국민카드":
      return "#6A6056";
    default:
      return "#333333";
  }
};

interface CardProps {
  cardCompany?: CardCompany | "";
  children?: React.ReactNode;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 212px;
  height: 132px;
  background-color: ${({ cardCompany }) =>
    cardCompany ? getCardBackgroundColor(cardCompany) : "#D5D5D5"};
  color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  padding: 12px 8px;
  position: relative;

  transition: transform 0.6s;
  transform-style: preserve-3d;
  &.front {
    transform: rotateY(0deg);
  }

  &.back {
    transform: rotateY(180deg);
  }
`;

export const logoDiv = css({
  display: "flex",
  justifyContent: "space-between",
});

export const cardNumbersStyle = css({
  display: "flex",
  gap: "5px",
});

export const cardNumberStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3px",
  width: "38px",
  height: "29px",
});

export const Password = styled.div`
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 100%;
`;

export const CVCStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "200px",
  height: "24px",
  marginBottom: "24px",
  backgroundColor: "#CBBA64",
  fontStyle: "italic",
  position: "absolute",
  bottom: "12px",
  paddingRight: "12px",
  left: 0,
});

export const CardWrapper = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  perspective: 1000px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.front {
    transform: rotateY(0deg);
  }

  &.back {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div<CardProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ cardCompany }) =>
    cardCompany ? getCardBackgroundColor(cardCompany) : "#333"};
  color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  padding: 12px 8px;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #d5d5d5;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  color: #fff;
`;
