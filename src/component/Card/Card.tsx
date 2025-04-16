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

type CardProps = {
  cardNumber: {
    first: number | null;
    second: number | null;
    third: number | null;
    forth: number | null;
  };
  cardExpirationDate: {
    month: string;
    year: string;
  };
};

function Card({ cardNumber, cardExpirationDate }: CardProps) {
  const { first, second, third, forth } = cardNumber;

  const masterCardType =
    first?.toString().startsWith('51') ||
    first?.toString().startsWith('52') ||
    first?.toString().startsWith('53') ||
    first?.toString().startsWith('54') ||
    first?.toString().startsWith('55');

  const visaCardType = first?.toString().startsWith('4');

  const checkCardType = () => {
    if (masterCardType) {
      return MasterCard;
    } else if (visaCardType) {
      return Visa;
    }
  };

  const isCardExpirationDate =
    cardExpirationDate.month || cardExpirationDate.year;

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
          {isCardExpirationDate && (
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
