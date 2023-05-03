import styled, { keyframes } from 'styled-components';
import CardSkeleton from './CardSkeleton';

const registeredText = '카드를 등록중입니다.';

const CardLoading = () => {
  return (
    <LoadingContainer>
      <CardItemContainer>
        <CardSkeleton />
      </CardItemContainer>
      <LoadingTitleContainer>
        {registeredText.split('').map((char, index) => (
          <LoadingTitle key={`loading-title-${index}`} index={index}>
            {char}
          </LoadingTitle>
        ))}
      </LoadingTitleContainer>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardItemContainer = styled.div`
  margin-bottom: 42px;
`;

const LoadingTitleContainer = styled.div`
  text-align: center;
`;

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

const LoadingTitle = styled.span<{ index: number }>`
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-grey-color);

  display: inline-block;
  animation: ${loading} 0.7s infinite alternate;
  animation-delay: calc(0.1s * (1 + ${(props) => props.index}));
`;

export default CardLoading;
