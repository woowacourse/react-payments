import { useCard } from "../../../hooks/useCard";
import { useCardType } from "../../../hooks/useCardType";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  CardPreviewContainerCSS,
  CardPreviewCSS,
  CardTopContainerCSS,
  CardICChipCSS,
} from "./CardPreview.styled";

export default function CardPreview() {
  const { cardNumbers, expirationPeriod, cardCompany } = useCard();
  const cardType = useCardType(cardNumbers);

  return (
    <CardPreviewContainerCSS>
      <CardPreviewCSS $cardCompany={cardCompany}>
        <CardTopContainerCSS>
          <CardICChipCSS />
          {cardType !== null && <CardTypeCSS $cardType={cardType} />}
        </CardTopContainerCSS>

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
