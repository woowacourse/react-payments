import * as styled from './CardPreview.styled';

import { useCardInfoValue } from '../../context/CardInfoContext';

import { Card } from '../';

interface CardPreviewProps {
  openModal: () => void;
}

const CardPreview = ({ openModal }: CardPreviewProps) => {
  const cardInfo = useCardInfoValue();

  return (
    <styled.CardPreview onClick={openModal}>
      <Card cardInfo={cardInfo} />
    </styled.CardPreview>
  );
};

export default CardPreview;
