import CardLabel from '../components/@common/CardLabel';
import Card from '../components/Card/Card';
import CardType from '../types/Card';
import * as Styled from './AddCardAlias.styles';

interface CardProps {
  card: CardType;
}

const AddAlias = ({ card }: CardProps) => {
  console.log(card);
  return (
    <Styled.PageWrapper>
      <Styled.CardLabelWrapper>
        <CardLabel labelText="카드등록이 완료되었습니다." />
      </Styled.CardLabelWrapper>
      <Styled.CardWrapper>
        <Card
          cardNumbers={card.cardNumbers}
          expiredDates={card.expiredDates}
          cardOwnerName={card.cardOwnerName}
          cardCompany={card.cardCompany}
        />
      </Styled.CardWrapper>
    </Styled.PageWrapper>
  );
};

export default AddAlias;
