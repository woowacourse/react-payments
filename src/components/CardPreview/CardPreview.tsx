import * as styled from './CardPreview.styled';

import { useCardInfoValue } from '../../context/CardInfoContext';

import { Card } from '../';

import { useModal } from 'react-reusable-modal';

const CardPreview = () => {
  const { openModal } = useModal();
  const cardInfo = useCardInfoValue();

  return (
    <styled.CardPreview onClick={openModal}>
      <Card cardInfo={cardInfo} />
    </styled.CardPreview>
  );
};

export default CardPreview;
