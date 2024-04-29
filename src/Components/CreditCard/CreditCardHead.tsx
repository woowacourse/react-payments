/** @jsxImportSource @emotion/react */
import masterImage from "../../assets/masterImage.png";
import visaImage from "../../assets/visaImage.png";

import { cardInfoStyle, logoStyle, periodRowStyle, periodStyle, rowStyle, cardPreviewStyle, width42 } from "./style";
import {
  CardIssuerContext,
  CardNumbersContext,
  CardOwnerInfoContext,
  CardValidityPeriodContext,
} from "../../routes/Payments/CardInfoContextProvider";

import useContextWrapper from "../../hooks/useContextWrapper";
import { formatTwoDigitNumber } from "../../domainUtils";

const isVisa = (cardNumber?: string) => {
  const VISA_START_NUMBER = 4;
  return cardNumber && cardNumber.startsWith(String(VISA_START_NUMBER));
};

const isMaster = (cardNumber?: string) => {
  const MASTER_CARD_START_NUMBER_LIST = [51, 52, 53, 54];
  const MASTER_REG_PATTERN = new RegExp(`${MASTER_CARD_START_NUMBER_LIST.map(String).join("|")}`);
  return cardNumber && MASTER_REG_PATTERN.test(cardNumber);
};

const getCardImage = (string?: string) => {
  if (isVisa(string)) return visaImage;
  if (isMaster(string)) return masterImage;
  return null;
};

const CreditCardHead = () => {
  const cardNumbers = useContextWrapper(CardNumbersContext)[0];
  const { month, year } = useContextWrapper(CardValidityPeriodContext)[0];
  const cardOwnerInfo = useContextWrapper(CardOwnerInfoContext)[0];
  const cardIssuer = useContextWrapper(CardIssuerContext)[0];

  const cardImage = getCardImage(cardNumbers?.firstNumbers);

  return (
    <div css={cardPreviewStyle(cardIssuer.name)}>
      <div css={rowStyle}>
        <div css={logoStyle}></div>
        {cardImage ? <img css={logoStyle} src={cardImage} /> : null}
      </div>
      <section css={cardInfoStyle}>
        <div css={rowStyle}>
          {Object.values(cardNumbers)?.map((cardNumberPart, index) => (
            <div key={index} css={width42}>
              {cardNumberPart && index < 2 ? cardNumberPart : "*".repeat(cardNumberPart?.length ?? 0)}
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

export default CreditCardHead;
