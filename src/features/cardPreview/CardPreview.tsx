import {
  StyledContainer,
  StyledIconWrap,
  StyledMagnetic,
  StyledLogoWrap,
  StyledCardNumberWrap,
  StyledCardNumber,
  StyledExpirationPeriod,
} from "./CardPreview.css";
import { CardTypeList } from "../../\btypes/index.types";
import {
  CardNumberPosition,
  ExpirationPeriod,
} from "../../\btypes/index.types";
import { INITIALIZE_VALUE } from "../../shared/constants/constant";
import { useMemo } from "react";

type CardNumber = Record<CardNumberPosition, string>;

type CardPreviewProps = {
  cardNumber: CardNumber;
  expirationPeriod: Record<ExpirationPeriod, string>;
  cardType: keyof CardTypeList | "";
};

const CARD_IDENTIFYING_NUMBER = {
  VISA: 4,
  MASTERCARD: {
    MIN: 51,
    MAX: 55,
  },
};

function getIdentifyFns(id: string) {
  return [
    {
      identify: () => Number(id[0]) === CARD_IDENTIFYING_NUMBER.VISA,
      logoSrc: "./images/Visa.svg",
    },
    {
      identify: () =>
        Number(id) >= CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN &&
        Number(id) <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX,
      logoSrc: "./images/Mastercard.svg",
    },
  ];
}

function CardPreview({
  cardNumber,
  expirationPeriod,
  cardType,
}: CardPreviewProps) {
  const logoSrc = useMemo(() => {
    const id = cardNumber.first.slice(0, 2);
    const identifyFns = getIdentifyFns(id);
    const identifiedLogoSrc = identifyFns.find((fn) => fn.identify());
    return identifiedLogoSrc?.logoSrc ?? INITIALIZE_VALUE;
  }, [cardNumber]);

  return (
    <StyledContainer cardType={cardType}>
      <StyledIconWrap>
        <StyledMagnetic></StyledMagnetic>
        {logoSrc !== INITIALIZE_VALUE ? (
          <StyledLogoWrap>
            <img
              src={logoSrc}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </StyledLogoWrap>
        ) : null}
      </StyledIconWrap>
      <StyledCardNumberWrap>
        <StyledCardNumber>{cardNumber.first}</StyledCardNumber>
        <StyledCardNumber>{cardNumber.second}</StyledCardNumber>
        <StyledCardNumber>
          {"*".repeat(cardNumber.third.length)}
        </StyledCardNumber>
        <StyledCardNumber>
          {"*".repeat(cardNumber.fourth.length)}
        </StyledCardNumber>
      </StyledCardNumberWrap>
      <StyledExpirationPeriod>
        {expirationPeriod.month}/{expirationPeriod.year}
      </StyledExpirationPeriod>
    </StyledContainer>
  );
}

export default CardPreview;
