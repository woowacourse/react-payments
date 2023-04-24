import { CardInfo } from '../../types/state';
import Card from '../Card/Card';
import * as styled from './CardPreview.styled';

const CardPreview = ({ cardInfo, bgColor }: { cardInfo: CardInfo; bgColor: string }) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} bgColor={bgColor} />
    </styled.CardPreview>
  );
};

export default CardPreview;
