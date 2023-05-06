import styled, { keyframes } from 'styled-components';

type Props = {};

export const RegisterCardLoadingBar = ({}: Props) => {
  return (
    <Container>
      <BehindLoadingBox>
        <FrontLoadingBox />
      </BehindLoadingBox>
      <LoadingMessage>카드를 등록중입니다</LoadingMessage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BehindLoadingBox = styled.div`
  position: relative;
  background: #d9d9d9;
  border-radius: 10px;
  width: 170px;
  height: 106px;
`;

const slideKeyframes = keyframes`
  from {
    margin-left: 0%;
  }
  
  to {
    margin-left: 50%;
  }
`;

const FrontLoadingBox = styled.div`
  position: absolute;
  background: #333333;
  border-radius: 10px;
  width: 85px;
  height: 106px;

  animation: 1.2s linear 0s infinite alternate ${slideKeyframes};
`;

const LoadingMessage = styled.p`
  font-weight: 500;
  font-size: 14px;
`;
