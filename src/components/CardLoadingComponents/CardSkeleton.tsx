import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  to {
    background-position: -200% 0;
  }
`;

const CardSkeleton = styled.div`
  width: 213px;
  height: 133px;

  box-sizing: border-box;
  border-radius: 5px;

  background-image: var(--skeleton-color);
  background-position: 0% center;
  background-size: 200% 100%;

  animation: ${shine} 3s linear infinite;
`;

export default CardSkeleton;
