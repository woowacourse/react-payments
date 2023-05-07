import * as styled from './CardPreview.styled';

import { useCardInfoValue } from '../../context/CardInfoContext';

import { Card } from '../';

const CardPreview = () => {
  const cardInfo = useCardInfoValue();

  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} />
    </styled.CardPreview>
  );
};

export default CardPreview;
