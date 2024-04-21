/** @jsxImportSource @emotion/react */
import { useContext } from "react";

import masterImage from "../../assets/masterImage.png";
import visaImage from "../../assets/visaImage.png";
import { CardNumbersContext, CardOwnerInfoContext, CardValidityPeriodContext } from "../../App";

import { cardInfoStyle, logoStyle, periodRowStyle, periodStyle, rowStyle, style, width42 } from "./emotionCss";

const formatTwoDigitNumber = (n: number | undefined) => {
  if (!n) return "";
  return String(n).padStart(2, "0");
};

const CreditCard = () => {
  const cardNumbers = useContext(CardNumbersContext)![0];
  const cardValidityPeriod = useContext(CardValidityPeriodContext)![0];
  const cardOwnerInfo = useContext(CardOwnerInfoContext)![0];

  const pattern = /^(51|52|53|54)/;
  const { month, year } = cardValidityPeriod!;
  const cardImage = cardNumbers?.firstNumbers?.toString().startsWith("4")
    ? visaImage
    : cardNumbers?.firstNumbers && pattern.test(cardNumbers?.firstNumbers?.toString())
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
              {part && index < 2
                ? part
                : part
                  ? part
                      .toString()
                      .split("")
                      .map(() => "*")
                      .join("")
                  : ""}
            </div>
          ))}
        </div>
        <div css={periodRowStyle}>
          <span css={periodStyle}>{formatTwoDigitNumber(month)}</span>
          <span>{(month || year) && "/"}</span>
          <span css={periodStyle}>{formatTwoDigitNumber(year)}</span>
        </div>
        <div> {cardOwnerInfo.name}</div>
      </section>
    </div>
  );
};

export default CreditCard;
