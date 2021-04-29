import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Keyboard: styled.div`
    width: 100%;
    height: 100%;
  `,
  NumberContainer: styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 4px;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 3px;
    justify-content: center;
    align-content: center;
    grid-template-areas:
      '. . . .'
      '. . . .'
      '. . . .'
      'close close backspace backspace';

    /* & > .number-item:not(:nth-child(4n-3)) {
      border-left: 1px solid;
    }
    & > .number-item {
      border-bottom: 1px solid;
    } */
  `,
  Number: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    background-color: #d5e7e8;
    border-radius: 5px 5px 5px 5px;
    &.number {
      cursor: pointer;
    }
    &.number:active {
      background-color: #95a1a2;
      color: white;
    }
  `,
  Close: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    grid-area: close;
    cursor: pointer;
    background-color: #d5e7e8;
    border-radius: 5px 5px 5px 5px;
    margin: 0 auto;
    cursor: pointer;
    &:active {
      background-color: #95a1a2;
      color: white;
    }
  `,
  Backspace: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    grid-area: backspace;
    background-color: ${COLOR.LIGHT_GRAY};
    border-radius: 5px 5px 5px 5px;
    & {
      cursor: pointer;
    }
    &:active {
      background-color: gray;
      color: white;
    }
  `,
};

export default Styled;
