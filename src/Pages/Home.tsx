import styled from 'styled-components';
import Card, { CARD_TYPE, CardInformation } from '../components/Card';
import Header from '../components/Header';
import useWrappingContext from '../hooks/useWrappingContext';
import CardListStore from '../store';

const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    margin-bottom: 46px;
    :nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

const Message = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 10px;
`;

function Home() {
  const { cardList } = useWrappingContext(CardListStore);

  return (
    <>
      <Header title="보유 카드" hasBackHistory={false} />
      <MainHome>
        <Message>새로운 카드를 등록해주세요.</Message>
        {cardList?.map((cardInformation: CardInformation) => (
          <Card cardInformation={cardInformation} cardType={CARD_TYPE.DEFAULT} />
        ))}
        <Card cardType={CARD_TYPE.REGISTER_BUTTON} />
      </MainHome>
    </>
  );
}

export default Home;
