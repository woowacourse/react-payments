/** @jsxImportSource @emotion/react */
import { useContext } from "react";

import masterImage from "../../assets/masterImage.png";
import visaImage from "../../assets/visaImage.png";

import { cardInfoStyle, logoStyle, periodRowStyle, periodStyle, rowStyle, style, width42 } from "./emotionCss";
import {
  CardNumbersContext,
  CardOwnerInfoContext,
  CardValidityPeriodContext,
} from "../../routes/Payments/CardInfoContextProvider";

const formatTwoDigitNumber = (n: number | undefined) => {
  if (!n) return "";
  return String(n).padStart(2, "0");
};

const isVisa = (cardNumbers?: number) => {
  return cardNumbers?.toString().startsWith("4");
};

const isMaster = (cardNumbers?: number) => {
  const pattern = /^(51|52|53|54)/;
  return cardNumbers && pattern.test(cardNumbers?.toString());
};

const CreditCard = () => {
  const cardNumbers = useContext(CardNumbersContext)![0];
  const { month, year } = useContext(CardValidityPeriodContext)![0];
  const cardOwnerInfo = useContext(CardOwnerInfoContext)![0];

  const cardImage = isVisa(cardNumbers?.firstNumbers)
    ? visaImage
    : isMaster(cardNumbers?.firstNumbers)
      ? masterImage
      : null;

  return (
    <div css={style}>
      <div css={rowStyle}>
        <div css={logoStyle}></div>
        {cardImage ? <img css={logoStyle} src={cardImage} /> : null}
      </div>
      <section css={cardInfoStyle}>
        <div css={rowStyle}>
          {Object.values(cardNumbers)?.map((part, index) => (
            <div key={index} css={width42}>
              {part && index < 2 ? part : "*".repeat(part?.length ?? 0)}
            </div>
          ))}
        </div>
        <div css={periodRowStyle}>
          <span css={periodStyle}>{formatTwoDigitNumber(month)}</span>
          <span>{(month || year) && "/"}</span>
          <span css={periodStyle}>{formatTwoDigitNumber(year)}</span>
        </div>
        <div> {cardOwnerInfo.name?.toUpperCase()}</div>
      </section>
    </div>
  );
};

export default CreditCard;
