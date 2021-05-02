import styled from 'styled-components';

const Styled = {
  List: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 26px;
    column-gap: 10px;
  `,
  ListItem: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.2);
      & > div {
        font-weight: 700;
      }
    }
  `,
  CardName: styled.div`
    margin-top: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #525252;
  `,
};

export default Styled;
