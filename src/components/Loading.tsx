import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <StyledLoading />
      <LoadingMessage>카드를 등록중입니다.</LoadingMessage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  margin-top: 50px;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #333;
  animation: ${spinnerAnimation} 1s linear infinite;
`;

const LoadingMessage = styled.p`
  margin-top: 50px;
`;

export default Loading;
