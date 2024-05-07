/** @jsxImportSource @emotion/react */
import React from "react";
import {
  CVCStyle,
  Password,
  cardNumberStyle,
  cardNumbersStyle,
  logoDiv,
  CardFront,
  CardWrapper,
  CardBack,
} from "./CardPreview.styles";
import CardLogo from "../common/CardLogo/CardLogo";

interface CardPreviewProps {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cardholderName: string;
  cardCompany: CardCompany | "";
  cardCVC: string;
  isFront: boolean;
}

const getCardLogoOption = (cardNumber: string) => {
  const masterRegex = /^(51|52|53|54)/;
  const visaRegex = /^4/;

  if (masterRegex.test(cardNumber)) {
    return "master";
  } else if (visaRegex.test(cardNumber)) {
    return "visa";
  }
  return "none";
};

const CardPreview: React.FC<CardPreviewProps> = ({
  cardNumber,
  expiryMonth,
  expiryYear,
  cardholderName,
  cardCompany,
  cardCVC,
  isFront,
}) => {
  const formattedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, "$& ");
  const dd = formattedCardNumber.split("  ");
  const option = getCardLogoOption(cardNumber);
  const isFrontValue = isFront;

  return (
    <CardWrapper className={!isFrontValue ? "front" : "back"}>
      <CardFront cardCompany={cardCompany}>
        <div css={logoDiv}>
          <CardLogo option="default" />
          <CardLogo option={option} />
        </div>

        <div css={cardNumbersStyle}>
          <div css={cardNumberStyle}>{dd[0]}</div>
          <div css={cardNumberStyle}>{dd[1]}</div>
          <div css={cardNumberStyle}>
            {dd[2] &&
              Array.from({ length: dd[2].length }, () => {
                return <Password />;
              })}
          </div>
          <div css={cardNumberStyle}>
            {dd[3] &&
              Array.from({ length: dd[3].length }, () => {
                return <Password />;
              })}
          </div>
        </div>

        <div>
          {expiryMonth}
          {expiryMonth && "/"}
          {expiryYear}
        </div>
        <div>{cardholderName}</div>
      </CardFront>
      <CardBack>
        <div css={CVCStyle}>{cardCVC ? cardCVC : ""}</div>
      </CardBack>
    </CardWrapper>
  );
};

export default CardPreview;
