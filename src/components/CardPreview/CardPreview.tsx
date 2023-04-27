import { CardInfo } from '../../types/state';
import { COLOR } from '../../constants/cardInfo';

import * as styled from './CardPreview.styled';
import Card from '../Card/Card';

const CardPreview = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <styled.CardPreview>
      <Card cardInfo={cardInfo} theme={cardInfo.cardCompany.theme ?? COLOR.GREY200} />
    </styled.CardPreview>
  );
};

export default CardPreview;
