import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';

import * as styled from './CardPreview.styled';
import Card from '../Card/Card';

const CardPreview = ({ handleOpenModal }: { handleOpenModal?: () => void }) => {
  const {
    cardNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    cardCompany,
    cardAlias,
  } = useContext(CardInfoContext);

  return (
    <styled.CardPreview onClick={handleOpenModal}>
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
