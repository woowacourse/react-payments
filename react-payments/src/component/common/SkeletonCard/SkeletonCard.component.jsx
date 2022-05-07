import styled, { keyframes } from "styled-components";

const Refresh = keyframes`
  0% {
    background-position: calc(-100px);
  }
  40%{
    background-position: 300px;
  }
  100% {
    background-position: 300px;
  }
`;

const SkeletonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SkeletonCardContainer = styled.div`
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: ${Refresh} 2s infinite ease-out;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  width: 208px;
  height: 130px;
`;

const SkeletonCardText = styled.div`
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: ${Refresh} 2s infinite ease-out;
  width: 90px;
  height: 24px;
  border-radius: 5px;
`;

const SkeletonCardBox = () => {
  return (
    <SkeletonCardWrapper>
      <SkeletonCardContainer />
      <SkeletonCardText />
    </SkeletonCardWrapper>
  );
};

export default SkeletonCardBox;
