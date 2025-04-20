import { useCard } from "../../../hooks/useCard";
import { useCardType } from "../../../hooks/useCardType";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  CardPreviewContainerCSS,
  CardPreviewCSS,
} from "./CardPreview.styled";

function CardPreview() {
  const { cardNumbers, expirationPeriod } = useCard();
  const cardType = useCardType(cardNumbers);

  return (
    <CardPreviewContainerCSS>
      <CardPreviewCSS>
        {cardType !== null && <CardTypeCSS $cardType={cardType} />}
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
      </CardPreviewCSS>
    </CardPreviewContainerCSS>
  );
}
export default CardPreview;
