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
import { maskCardValue } from '../../utils';

function Card() {
  const { cardNumber, cardExpiration, cardBrand } = useCard();

  const cardTypeId = identifyCardType(cardNumber.value);

  const getCardTypeImage = () => {
    if (cardTypeId === 'mastercard') return MasterCard;
    if (cardTypeId === 'visa') return Visa;
    return null;
  };

  const cardTypeImage = getCardTypeImage();

  const hasCardExpirationDate =
    cardExpiration.value.month || cardExpiration.value.year;

  const getDisplayCardValue = (
    value: string | undefined,
    fieldName: string
  ) => {
    const shouldMask = fieldName === 'third' || fieldName === 'forth';
    return maskCardValue(value, shouldMask);
  };

  return (
    <section css={dynamicCardStyle(cardBrand.color)}>
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
          {Object.entries(cardNumber.value).map(([fieldName, value], index) => (
            <span key={index} css={cardContentText}>
              {getDisplayCardValue(value?.toString(), fieldName)}
            </span>
          ))}
        </div>
        <div css={cardContent}>
          {hasCardExpirationDate && (
            <span css={cardContentText}>
              {cardExpiration.value.month}/{cardExpiration.value.year}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Card;
