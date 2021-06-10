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
  margin: 2rem 0 4rem 0;

  div {
    color: white;
  }
`;

export const CardListTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
`;

export const NickName = styled.h3`
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;
`;
