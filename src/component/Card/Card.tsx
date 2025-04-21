import { MasterCard, Visa } from '../../asset/image';
import {
  cardContainer,
  cardContent,
  cardContentContainer,
  cardContentText,
  cardFrame,
  cardLayout,
  cardType,
} from './Card.style';
import { CARD_TYPE } from '../../constants';
import { CardExpirationDate, CardNumber } from "../../types";

type CardProps = {
  cardNumber: CardNumber;
  cardExpirationDate: CardExpirationDate;
};

function Card({ cardNumber, cardExpirationDate }: CardProps) {
  const { first, second, third, forth } = cardNumber;

  const firstString = first?.toString();

  const masterCardType =
    firstString &&
    CARD_TYPE.masterCard.startsWith.some((prefix) =>
      firstString.startsWith(prefix)
    );

  const visaCardType =
    firstString && firstString.startsWith(CARD_TYPE.visa.startsWith);

  const checkCardType = () => {
    if (masterCardType) {
      return MasterCard;
    } else if (visaCardType) {
      return Visa;
    }
  };

  const hasFilledExpirationField = Boolean(cardExpirationDate.month || cardExpirationDate.year);

  return (
    <section css={cardLayout}>
      <div css={cardContainer}>
        <div css={cardFrame}></div>
        {checkCardType() && (
          <div>
            <img css={cardType} src={checkCardType() ?? ''} alt="카드 타입" />
          </div>
        )}
      </div>
      <div css={cardContentContainer}>
        <div css={cardContent}>
          <span css={cardContentText}>{first}</span>
          <span css={cardContentText}>{second}</span>
          <span css={cardContentText}>{third}</span>
          <span css={cardContentText}>{forth}</span>
        </div>
        <div css={cardContent}>
          {hasFilledExpirationField && (
            <span css={cardContentText}>
              {cardExpirationDate.month}/{cardExpirationDate.year}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Card;
