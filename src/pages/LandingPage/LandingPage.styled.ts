import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  width: 100%;
  height: 591px;
  overflow: scroll;
  flex-direction: column;
  gap: 8px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-alias {
    margin: 14px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`;
