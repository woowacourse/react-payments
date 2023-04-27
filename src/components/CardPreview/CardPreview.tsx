import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';
import { COLOR } from '../../constants/cardInfo';

import * as styled from './CardPreview.styled';
import Card from '../Card/Card';

const CardPreview = () => {
  const { cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany, cardAlias } =
    useContext(CardInfoContext);

  return (
    <styled.CardPreview>
      <Card
        cardInfo={{
          cardNumbers,
          expirationDate,
          ownerName,
          securityCode,
          password,
          cardCompany,
          cardAlias,
        }}
        theme={cardCompany.theme}
      />
    </styled.CardPreview>
  );
};

export default CardPreview;
