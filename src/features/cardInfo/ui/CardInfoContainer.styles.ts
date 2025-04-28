import styled from '@emotion/styled';

export const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 45px 0;
`;

export const AnimatedSection = styled.section<{ visible: boolean }>`
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  max-height: ${({ visible }) => (visible ? '200px' : '0')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(10px)')};
  transition: opacity 0.4s ease, max-height 0.4s ease, transform 0.4s ease;
`;
