import styled from '@emotion/styled';

export const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 45px 0;
`;

export const AnimatedSection = styled.div`
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, max-height 0.4s ease, transform 0.4s ease;

  &.visible {
    opacity: 1;
    max-height: 200px;
    transform: translateY(0);
  }
`;
