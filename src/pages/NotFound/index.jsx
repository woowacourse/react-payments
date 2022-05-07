import { Layout } from '../index.styled';
import Button from '../../components/Button';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <h1>존재하지 않는 페이지입니다.😳</h1>
        <Button type="link" to="/">
          🏠 홈으로 가기
        </Button>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
