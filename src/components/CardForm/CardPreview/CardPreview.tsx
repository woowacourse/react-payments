import { CARD_FORM_TYPE } from "../../../constants/card";
import { useCard } from "../../../hooks/useCard";
import { useCardValidation } from "../../../hooks/useCardValidation";
import { identifyCardType } from "../../../utils/identifyCardType";
import {
  CardICChipStyles,
  CardNumberGroupStyles,
  CardPreviewContainerStyles,
  CardPreviewStyles,
  CardTopContainerStyles,
  CardTypeStyles,
} from "./CardPreview.styled";

export default function CardPreview() {
  const { cardNumber, expirationPeriod, cardCompany } = useCard();
  const { hasErrorByType } = useCardValidation();
  const cardType = identifyCardType(cardNumber);

  return (
    <CardPreviewContainerStyles>
      <CardPreviewStyles $cardCompany={cardCompany}>
        <CardTopContainerStyles>
          <CardICChipStyles />
          {!hasErrorByType(CARD_FORM_TYPE.cardNumber) && cardType !== null && (
            <CardTypeStyles $cardType={cardType} />
          )}
        </CardTopContainerStyles>

        <CardNumberGroupStyles>
          <span>{cardNumber.first}</span>
          <span>{cardNumber.second}</span>
          <span>{cardNumber.third && "*".repeat(cardNumber.third.length)}</span>
          <span>
            {cardNumber.fourth && "*".repeat(cardNumber.fourth.length)}
          </span>
        </CardNumberGroupStyles>

        {(expirationPeriod.month || expirationPeriod.year) && (
          <span>
            {expirationPeriod.month}/{expirationPeriod.year}
          </span>
        )}
      </CardPreviewStyles>
    </CardPreviewContainerStyles>
  );
}
