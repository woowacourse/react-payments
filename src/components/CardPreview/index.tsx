import { CardInfo } from '../../types/card';
import Card from '../Card';
import * as styled from './CardPreview.styled';

interface CardPreviewProps {
  cardInfo: CardInfo;
  bgColor?: string;
}

const CardPreview = ({ cardInfo, bgColor }: CardPreviewProps) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} bgColor={bgColor} />
    </styled.CardPreview>
  );
};

export default CardPreview;
