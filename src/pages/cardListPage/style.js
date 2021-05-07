import styled from 'styled-components';
import { COLOR } from '../../constants/color';

const Styled = {
  CardList: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  CardItem: styled.li`
    margin-top: 2rem;

    &:hover {
      & > div:last-child {
        display: flex;
        justify-content: space-around;
      }
    }
  `,

  ButtonContainer: styled.div`
    display: none;
    margin-top: 0.5rem;
    color: ${COLOR.GRAY_500};
  `,

  CardNickname: styled.div`
    text-align: center;
    margin-top: 0.5rem;
  `,
};

export default Styled;
