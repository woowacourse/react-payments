import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';

const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 10px;
`;

function Home() {
  return (
    <>
      <Header title="보유 카드" hasBackHistory={false} />
      <MainHome>
        <Message>새로운 카드를 등록해주세요.</Message>
        <Card isAddForm={false} />
      </MainHome>
    </>
  );
}

export default Home;
