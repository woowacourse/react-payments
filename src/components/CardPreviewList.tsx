import { useEffect } from 'react';
import styled from 'styled-components';
import { useCardState } from '../context/CardContext';
import { setLocalStorage } from '../utils/localStorage';

import CardPreview from './CardPreview';
import { LOCAL_STORAGE_KEY } from '../constants';

const CardPreviewList = () => {
  const cardList = useCardState();

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST, cardList);
  }, [cardList]);

  return (
    <CardPreviewListWrapper>
      {cardList.map(({ id, cardCompany, cardNumbers, cardExpirationDate, cardOwner }) => (
        <CardPreview
          key={id}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          cardOwner={cardOwner}
          cardExpirationDate={cardExpirationDate}
        />
      ))}
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 44px;
  row-gap: 44px;
`;

export default CardPreviewList;
