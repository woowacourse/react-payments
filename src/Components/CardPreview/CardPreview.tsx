/** @jsxImportSource @emotion/react */
import React from "react";
import {
  CardStyle,
  Password,
  cardNumberStyle,
  cardNumbersStyle,
  logoDiv,
} from "./CardPreview.styles";
import CardLogo from "../common/CardLogo/CardLogo";

interface CardPreviewProps {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cardholderName: string;
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
}) => {
  const formattedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, "$& ");
  const dd = formattedCardNumber.split("  ");
  const option = getCardLogoOption(cardNumber);

  return (
    <article css={CardStyle}>
      <div css={logoDiv}>
        <CardLogo option="default" />
        <CardLogo option={option} />
      </div>

      <div css={cardNumbersStyle}>
        <div css={cardNumberStyle}>{dd[0]}</div>
        <div css={cardNumberStyle}>{dd[1]}</div>
        <div css={cardNumberStyle}>
          {Array.from({ length: dd[2].length }, () => {
            return <Password />;
          })}
        </div>
        <div css={cardNumberStyle}>
          {Array.from({ length: dd[3].length }, () => {
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
    </article>
  );
};

export default CardPreview;
