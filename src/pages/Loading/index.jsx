import { Layout } from '../index.styled';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Layout>
      <Container>
        <h3>로딩중 👀! 조금만 기다려주세요 💙</h3>
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

export default Loading;
