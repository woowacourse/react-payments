import { CardInfo } from '../../types/state';

import * as styled from './CardPreview.styled';
import Card from '../Card/Card';

const CardPreview = ({ cardInfo, bgColor }: { cardInfo: CardInfo; bgColor: string }) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} bgColor={bgColor} />
    </styled.CardPreview>
  );
};

export default CardPreview;
