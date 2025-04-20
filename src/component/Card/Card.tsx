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
import { CardExpirationDate, CardNumber } from '../../../types/types';
import { identifyCardType } from '../../utils/cardTypeUtils';

type CardProps = {
  cardNumber: CardNumber;
  cardExpirationDate: CardExpirationDate;
};

function Card({ cardNumber, cardExpirationDate }: CardProps) {
  const cardTypeId = identifyCardType(cardNumber);

  const getCardTypeImage = () => {
    if (cardTypeId === 'mastercard') return MasterCard;
    if (cardTypeId === 'visa') return Visa;
    return null;
  };

  const cardTypeImage = getCardTypeImage();

  const hasCardExpirationDate =
    cardExpirationDate.month || cardExpirationDate.year;

  return (
    <section css={cardLayout}>
      <div css={cardContainer}>
        <div css={cardFrame}></div>
        {cardTypeImage && (
          <div>
            <img css={cardType} src={cardTypeImage} alt="카드 타입" />
          </div>
        )}
      </div>
      <div css={cardContentContainer}>
        <div css={cardContent}>
          {Object.values(cardNumber).map((value, index) => (
            <span key={index} css={cardContentText}>
              {value}
            </span>
          ))}
        </div>
        <div css={cardContent}>
          {hasCardExpirationDate && (
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
