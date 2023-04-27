import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import CardType from '../types/Card';
import Header from '../components/Header/Header';
import * as Styled from './Home.styles';

const Home = ({ cards }: { cards: CardType[] }) => {
  return (
    <Styled.PageWrapper>
      <Header page="home" titleContent="보유 카드" />
      <Styled.Wrapper>
        {cards.length === 0 && (
          <Styled.EmptyCardText>
            새로운 카드를 등록해주세요.
          </Styled.EmptyCardText>
        )}
        {cards.map(
          ({
            id,
            cardNumbers,
            expiredDates,
            cardOwnerName,
            cardCompany,
          }: CardType) => (
            <Card
              key={id}
              cardNumbers={cardNumbers}
              expiredDates={expiredDates}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
          )
        )}
        <AddCardButton></AddCardButton>
      </Styled.Wrapper>
    </Styled.PageWrapper>
  );
};

export default Home;
