import { MasterCard } from '../../asset/image';
import {
  cardContainer,
  cardContent,
  cardContentContainer,
  cardContentText,
  cardFrame,
  cardLayout,
  cardType,
} from './Card.style';

function Card() {
  return (
    <section css={cardLayout}>
      <div css={cardContainer}>
        <div css={cardFrame}></div>
        <img css={cardType} src={MasterCard} />
      </div>
      <div css={cardContentContainer}>
        <div css={cardContent}>
          <span css={cardContentText}>1231</span>
          <span css={cardContentText}>1231</span>
          <span css={cardContentText}>1231</span>
          <span css={cardContentText}>1231</span>
        </div>
        <div css={cardContent}>
          <span css={cardContentText}>04/21</span>
        </div>
      </div>
    </section>
  );
}

export default Card;
