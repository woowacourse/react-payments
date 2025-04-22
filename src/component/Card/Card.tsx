import { MasterCard, Visa } from '../../asset/image';
import {
  cardContainer,
  cardContent,
  cardContentContainer,
  cardContentText,
  cardFrame,
  cardType,
  dynamicCardStyle,
} from './Card.style';
import { useCard } from '../../context/CardContext';
import { identifyCardType } from '../../utils/cardTypeUtils';

function Card() {
  const { cardNumber, cardExpirationDate, cardBrandColor } = useCard();

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
    <section css={dynamicCardStyle(cardBrandColor)}>
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
