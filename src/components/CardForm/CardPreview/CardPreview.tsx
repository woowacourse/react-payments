import { CARD_FORM_TYPE } from "../../../constants/constants";
import { useCard } from "../../../hooks/useCard";
import { useCardType } from "../../../hooks/useCardType";
import { useCardValidation } from "../../../hooks/useCardValidation";
import {
  CardNumbersGroupStyles,
  CardTypeStyles,
  CardPreviewContainerStyles,
  CardPreviewStyles,
  CardTopContainerStyles,
  CardICChipStyles,
} from "./CardPreview.styled";

export default function CardPreview() {
  const { cardNumbers, expirationPeriod, cardCompany } = useCard();
  const cardType = useCardType(cardNumbers);
  const { hasErrorByType } = useCardValidation();

  return (
    <CardPreviewContainerStyles>
      <CardPreviewStyles $cardCompany={cardCompany}>
        <CardTopContainerStyles>
          <CardICChipStyles />
          {!hasErrorByType(CARD_FORM_TYPE.cardNumbers) && cardType !== null && (
            <CardTypeStyles $cardType={cardType} />
          )}
        </CardTopContainerStyles>

        <CardNumbersGroupStyles>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>
            {cardNumbers.third && "*".repeat(cardNumbers.third.length)}
          </span>
          <span>
            {cardNumbers.fourth && "*".repeat(cardNumbers.fourth.length)}
          </span>
        </CardNumbersGroupStyles>

        {(expirationPeriod.month || expirationPeriod.year) && (
          <span>
            {expirationPeriod.month}/{expirationPeriod.year}
          </span>
        )}
      </CardPreviewStyles>
    </CardPreviewContainerStyles>
  );
}
