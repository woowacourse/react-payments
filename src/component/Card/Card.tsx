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
    first: string;
    second: string;
    third: string;
    forth: string;
  };
};

function Card({ cardNumber }: CardProps) {
  const { first, second, third, forth } = cardNumber;

  const masterCardType =
    first.startsWith('51') ||
    first.startsWith('52') ||
    first.startsWith('53') ||
    first.startsWith('54') ||
    first.startsWith('55');

  const visaCardType = first.startsWith('4');

  const checkCardType = () => {
    if (masterCardType) {
      return MasterCard;
    } else if (visaCardType) {
      return Visa;
    }
  };

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
          <span css={cardContentText}>04/21</span>
        </div>
      </div>
    </section>
  );
}

export default Card;
