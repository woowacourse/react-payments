import styled from 'styled-components';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import { useCardListStore } from '../context/CardListProvider';
import getUniqueKey from '../utils/getUniqueKey';
import type { CardInformation } from '../components/Common/Card/types';

function Home() {
  const { cardList } = useCardListStore();

  return (
    <>
      <Header title="보유 카드" hasBackHistory={false} />
      <StyledMain>
        <StyledMessage>새로운 카드를 등록해주세요.</StyledMessage>
        {cardList?.map((cardInformation: CardInformation) => (
          <Card key={getUniqueKey()} cardInformation={cardInformation} isAddForm isShowName />
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
    margin-bottom: 26px;
  }
`;

const StyledMessage = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 10px;
`;

export default Home;
