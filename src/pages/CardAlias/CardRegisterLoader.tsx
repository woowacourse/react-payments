import styled, { keyframes } from 'styled-components';

const CardRegisterLoader = () => {
  return (
    <Styled.Layout>
      <Styled.Wrapper>
        <Styled.Loader />
      </Styled.Wrapper>
      <Styled.Message>카드를 등록중입니다.</Styled.Message>
    </Styled.Layout>
  );
};

export default CardRegisterLoader;

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Wrapper = styled.div`
  width: 170px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Loader = styled.div`
  width: 85px;
  height: inherit;
  background-color: #333333;
  border-radius: 10px;
  animation: ${moveRight} 1.5s ease-in-out infinite;
`;

const Message = styled.div`
  color: #575757;
  font-size: 14px;
  font-weight: 700;
`;

const Styled = {
  Layout,
  Wrapper,
  Loader,
  Message,
};
