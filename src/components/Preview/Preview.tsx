import { useEffect, useState } from "react";
import { useCard } from "../../hooks/useCard";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  ICChipCSS,
  LogoCSS,
  PreviewContainerCSS,
  PreviewCSS,
} from "./Preview.styled";
import { CardImageType } from "../../constants/constants";
import { checkCardType, parsingCardNumbers } from "../../utils/cardUtils";

function Preview() {
  const [cardImageType, setCardImageType] = useState<CardImageType | null>(
    null
  );
  const { cardNumbers, expirationPeriod, cardBrand } = useCard();

  useEffect(() => {
    const parsedCardNumbers = parsingCardNumbers(cardNumbers);
    const type = checkCardType(parsedCardNumbers);
    setCardImageType(type);
  }, [cardNumbers]);

  return (
    <PreviewContainerCSS>
      <PreviewCSS $brand={cardBrand}>
        <LogoCSS>
          <ICChipCSS />
          {cardImageType !== null && <CardTypeCSS $cardType={cardImageType} />}
        </LogoCSS>
        <CardNumbersGroupCSS>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>
            {cardNumbers.third && "*".repeat(cardNumbers.third.length)}
          </span>
          <span>
            {cardNumbers.fourth && "*".repeat(cardNumbers.fourth.length)}
          </span>
        </CardNumbersGroupCSS>
        {(expirationPeriod.month || expirationPeriod.year) && (
          <span>
            {expirationPeriod.month}/{expirationPeriod.year}
          </span>
        )}
      </PreviewCSS>
    </PreviewContainerCSS>
  );
}
export default Preview;
