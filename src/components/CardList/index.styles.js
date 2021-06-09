import styled from 'styled-components';

export const CardListContainer = styled.div`
  user-select: none;
  overflow: scroll;
  width: 100%;
  padding: 0 3rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  height: 11.5rem;
  margin: 1rem 0;
`;

export const CardListTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;
