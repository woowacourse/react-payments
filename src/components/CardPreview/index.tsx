import { CardInfo } from '../../types/card';
import Card from '../Card';
import * as styled from './CardPreview.styled';

interface CardPreviewProps {
  cardInfo: CardInfo;
  openModal: () => void;
}

const CardPreview = ({ cardInfo, openModal }: CardPreviewProps) => {
  return (
    <styled.CardPreview onClick={openModal}>
      <Card cardInfo={cardInfo} />
    </styled.CardPreview>
  );
};

export default CardPreview;
