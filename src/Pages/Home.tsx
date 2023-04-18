import styled from 'styled-components';
import Card from '../components/Card';

const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <MainHome>
      <div>새로운 카드를 등록해주세요.</div>
      <Card isAddForm={false} />
    </MainHome>
  );
}

export default Home;
