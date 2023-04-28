import { useContext } from 'react';
import CardLabel from '../components/@common/CardLabel';
import Card from '../components/Card/Card';
import * as Styled from './AddCardAlias.styles';
import { Context } from '../App';
import CardType from '../types/Card';

const AddAlias = () => {
  const currentCard = useContext<CardType[] | null>(Context);

  if (!currentCard) return <></>;

  return (
    <Styled.PageWrapper>
      <Styled.CardLabelWrapper>
        <CardLabel labelText="카드등록이 완료되었습니다." />
      </Styled.CardLabelWrapper>
      <Styled.CardWrapper>
        <Card
          cardNumbers={currentCard[currentCard.length - 1].cardNumbers}
          expiredDates={currentCard[currentCard.length - 1].expiredDates}
          cardOwnerName={currentCard[currentCard.length - 1].cardOwnerName}
          cardCompany={currentCard[currentCard.length - 1].cardCompany}
        />
      </Styled.CardWrapper>
    </Styled.PageWrapper>
  );
};

export default AddAlias;
