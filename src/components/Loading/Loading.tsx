import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <MovingCard />
    </Container>
  );
};

export default Loading;

const move = keyframes`
  /* 하단에서 */
  0% {
    transform: translateX(0);
  }
  /* 중앙으로 위치 */
  100% {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  width: 170px;
  height: 106px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const MovingCard = styled.div`
  width: 85px;
  height: 106px;
  background-color: #333333;
  border-radius: 10px;
  animation: ${move} 2s ease-in-out infinite;
`;
