import { Card } from '../';
import * as styled from './CardPreview.styled';

const CardPreview = ({ cardInfo, bgColor }) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} bgColor={bgColor} />
    </styled.CardPreview>
  );
};

export default CardPreview;
