import { css } from "@emotion/react";

import { ISSUERS, DEFAULT_CARD_COLOR, isIssuerCode } from "../../../constants/Issuers";
import type { CardDisplayInfo } from "../../../types";
import type { CardNetwork } from "../../../utils/cardNetwork";

import amexLogo from "../../../assets/American Express.png";
import dinersLogo from "../../../assets/Diners Club.png";
import masterLogo from "../../../assets/masterLogo.png";
import unionpayLogo from "../../../assets/China UnionPay.png";
import visaLogo from "../../../assets/visaLogo.png";

const NETWORK_LOGO: Record<Exclude<CardNetwork, "">, { src: string; alt: string }> = {
  visa: { src: visaLogo, alt: "Visa" },
  master: { src: masterLogo, alt: "Mastercard" },
  amex: { src: amexLogo, alt: "American Express" },
  diners: { src: dinersLogo, alt: "Diners Club" },
  unionpay: { src: unionpayLogo, alt: "UnionPay" },
};

const CARD_LAYOUT_COLOR = {
  chip: "#DDCD78",
  text: "#FFFFFF",
  shadow: "3px 3px 5px 0px rgba(0, 0, 0, 0.25)",
} as const;

const getCardColor = (issuerCode: string) => {
  return isIssuerCode(issuerCode) ? ISSUERS[issuerCode].color : DEFAULT_CARD_COLOR;
};

type CardProps = {
  cardInfo: CardDisplayInfo;
};

const Card = ({ cardInfo }: CardProps) => {
  return (
    <div css={cardStyle(cardInfo.issuerCode)}>
      <div css={cardHeaderStyle}>
        <div css={chipStyle}></div>
        {cardInfo.network !== "" && (
          <img
            css={networkLogoStyle}
            src={NETWORK_LOGO[cardInfo.network].src}
            alt={NETWORK_LOGO[cardInfo.network].alt}
          />
        )}
      </div>
      <div>
        <div css={cardNumbersStyle}>
          <span css={fixedCardNumberStyle}>{cardInfo.numbers[0]}</span>
          <span css={fixedCardNumberStyle}>{cardInfo.numbers[1]}</span>
          <span css={fixedCardNumberStyle}>{"•".repeat(cardInfo.numbers[2]?.length ?? 0)}</span>
          <span css={fixedCardNumberStyle}>{"•".repeat(cardInfo.numbers[3]?.length ?? 0)}</span>
        </div>
        <p css={expiryStyle}>
          {cardInfo.expiry[0]}
          <span css={slashStyle(!!cardInfo.expiry[1])}>/</span>
          {cardInfo.expiry[1]}
        </p>
      </div>
    </div>
  );
};

export default Card;

const cardStyle = (issuerCode: string) => css`
  width: 212px;
  height: 132px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${getCardColor(issuerCode)};
  box-shadow: ${CARD_LAYOUT_COLOR.shadow};
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const cardHeaderStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const chipStyle = css`
  background-color: ${CARD_LAYOUT_COLOR.chip};
  width: 36px;
  height: 22px;
  border-radius: 4px;
`;

const networkLogoStyle = css`
  width: 36px;
  height: 22px;
`;

const cardNumbersStyle = css`
  color: ${CARD_LAYOUT_COLOR.text};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const fixedCardNumberStyle = css`
  display: inline-block;
  min-width: 30px;
  font-family: "Inter";
`;

const expiryStyle = css`
  color: ${CARD_LAYOUT_COLOR.text};
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
`;

const slashStyle = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
`;
