import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  line-height: 26px;
`;

export const SubTitle = styled.p`
  color: #8b95a1;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: 13px;
`;
