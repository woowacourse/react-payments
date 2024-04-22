import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: var(--font-size-h2);
  font-weight: 700;
  line-height: 26px;
`;

export const SubTitle = styled.p`
  color: var(--grey-300);
  font-size: var(--font-size-sm);
  font-weight: 400;
  line-height: 13px;
`;
