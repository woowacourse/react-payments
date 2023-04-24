import { CardInfo } from '../../types/state';

import * as styled from './CardPreview.styled';
import Card from '../Card/Card';

interface CardPreviewProps {
  cardInfo: CardInfo;
  bgColor: string;
}

const CardPreview = ({ cardInfo, bgColor }: CardPreviewProps) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} bgColor={bgColor} />
    </styled.CardPreview>
  );
};

export default CardPreview;
