import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../../../constants/constants';

export const KeyboardWrapper = styled.div`
  .keyboard-nodes {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    margin-bottom: 1.5rem;

    .keyboard-node {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: ${FONT_SIZE.XLLARGE};
      box-shadow: 2px 2px 2px ${COLOR.KEYBOARD.BORDER};
      background-color: ${COLOR.KEYBOARD.BG};
      color: ${COLOR.MAIN.GLOBAL_FONT};
      width: 3.75rem;
      height: 3.75rem;
      cursor: pointer;

      &:hover {
        background-color: white;
        border: 1px solid ${COLOR.KEYBOARD.BORDER};
      }
    }
  }

  .keyboard-enter {
    border-radius: 5px;
    text-align: center;
    padding: 0.8rem 0;
    background-color: orange;
    color: white;
    font-weight: ${FONT_WEIGHT.BOLD};
    box-shadow: 2px 2px 2px ${COLOR.KEYBOARD.BORDER};
    cursor: pointer;
  }
`;
