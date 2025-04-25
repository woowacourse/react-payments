import { CARD_FORM_TYPE } from "../../../constants/constants";
import { useCard } from "../../../hooks/useCard";
import { useCardValidation } from "../../../hooks/useCardValidation";
import { identifyCardType } from "../../../utils/identifyCardType";
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
  const { hasErrorByType } = useCardValidation();
  const cardType = identifyCardType(cardNumbers);

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
