import styled from 'styled-components';

export const CardListContainer = styled.ul`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 4rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-item {
    margin-bottom: 4.25rem;
    position: relative;
    cursor: pointer;

    .nickname {
      position: absolute;
      left: 50%;
      bottom: -2rem;
      transform: translateX(-50%);
      font-weight: 500;
    }
  }
`;
