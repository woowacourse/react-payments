import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

export const Description = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.8rem;
`;
