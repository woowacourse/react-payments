import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const Styled = {
  Keyboard: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 227px;
    background-color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border: 1px solid;
  `,
  NumberContainer: styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      '. . . .'
      '. . . .'
      '. . . .'
      'close close backspace backspace';

    & > .number-item:not(:nth-child(4n-3)) {
      border-left: 1px solid;
    }
    & > .number-item {
      border-bottom: 1px solid;
    }
  `,
  Number: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    &.number {
      cursor: pointer;
    }
    &.number:active {
      background-color: ${COLOR.LIGHT_GRAY};
    }
  `,
  Close: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    grid-area: close;
    cursor: pointer;
    &:active {
      background-color: ${COLOR.LIGHT_GRAY};
    }
  `,
  Backspace: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-left: 1px solid;
    grid-area: backspace;
    cursor: pointer;
    &:active {
      background-color: ${COLOR.LIGHT_GRAY};
    }
  `,
};

export default Styled;
