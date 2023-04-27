import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const CardAlias = styled.p`
  margin-top: 12px;

  font-size: 14px;
  font-weight: 700;
`;
