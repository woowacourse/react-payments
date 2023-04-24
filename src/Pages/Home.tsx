import styled from 'styled-components';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import useWrappingContext from '../hooks/useWrappingContext';
import CardListStore from '../store';
import getUniqueKey from '../utils/getUniqueKey';
import type { CardInformation } from '../components/Common/Card/types';

function Home() {
  const { cardList } = useWrappingContext(CardListStore);

  return (
    <>
      <Header title="보유 카드" hasBackHistory={false} />
      <StyledMain>
        <StyledMessage>새로운 카드를 등록해주세요.</StyledMessage>
        {cardList?.map((cardInformation: CardInformation) => (
          <Card key={getUniqueKey()} cardInformation={cardInformation} isAddForm />
        ))}
        <Card isAddForm={false} />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
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

const StyledMessage = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 10px;
`;

export default Home;
