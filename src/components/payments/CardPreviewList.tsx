import styled from 'styled-components';
import CardPreview from './CardPreview';
import { useCardState } from '../../context/CardListContext';

const CardPreviewList = () => {
  const cardList = useCardState();

  return (
    <CardPreviewListWrapper>
      {cardList.map(({ id, cardCompany, cardNumbers, cardExpirationDate, cardOwner, cardName }) => (
        <CardPreviewWrapper key={id}>
          <CardPreview
            cardCompany={cardCompany}
            cardNumbers={cardNumbers}
            cardOwner={cardOwner}
            cardExpirationDate={cardExpirationDate}
          />
          <CardName>{cardName}</CardName>
        </CardPreviewWrapper>
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

const CardPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardName = styled.p`
  margin-top: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
  opacity: 0.9;
`;

export default CardPreviewList;
