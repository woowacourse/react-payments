import {
  StyledContainer,
  StyledIconWrap,
  StyledMagnetic,
  StyledLogoWrap,
  StyledCardNumberWrap,
  StyledCardNumber,
  StyledExpirationPeriod,
} from "../css/CardPreview.css";
import { CardPreviewProps } from "../types/CardPreview.types";
import { INITIALIZE_VALUE } from "../../../shared/constants/values";
import useLogoSrc from "../hooks/useLogoSrc";
import { LOGO_STYLES } from "../constants/CardPreview.constant";

function CardPreview({
  cardNumber,
  expirationPeriod,
  cardType,
}: CardPreviewProps) {
  const { logoSrc } = useLogoSrc(cardNumber);

  return (
    <StyledContainer cardType={cardType}>
      <StyledIconWrap>
        <StyledMagnetic></StyledMagnetic>
        {logoSrc !== INITIALIZE_VALUE ? (
          <StyledLogoWrap>
            <img src={logoSrc} alt="logo" style={LOGO_STYLES} />
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
