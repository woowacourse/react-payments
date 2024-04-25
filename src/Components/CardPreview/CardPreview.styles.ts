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

// export const CardStyle = css({
//   display: "flex",
//   flexDirection: "column",
//   gap: "10px",
//   width: "212px",
//   height: "132px",
//   backgroundColor: {(cardCompany)=>getCardBackgroundColor(cardCompany)},
//   color: "#fff",
//   borderRadius: "4px",
//   boxShadow: "3px 3px 5px 0px #00000040",
//   padding: "12px 8px",
// });

interface CardProps {
  cardCompany: CardCompany | "";
  children?: React.ReactNode;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 212px;
  height: 132px;
  background-color: ${({ cardCompany }) => getCardBackgroundColor(cardCompany)};
  color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  padding: 12px 8px;
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
