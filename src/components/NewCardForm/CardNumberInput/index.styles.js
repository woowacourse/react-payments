import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../constants/constant';

export const CardNumberInputWrapper = styled.div`
  margin-bottom: 10px;
  font-size: ${FONT_SIZE.LARGE};

  .input-label {
    font-size: ${FONT_SIZE.SMALL};
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -0.085rem;
  }

  .input-container {
    display: flex;
    background-color: ${COLOR.INPUT.DEFAULT_BG};
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    height: 2.8125rem;

    .input__column {
      display: flex;
      height: inherit;

      input {
        width: 4.375rem;
        margin: 0 2px;
        font-size: inherit;
      }
    }

    .input-separator {
      display: inline-block;
      min-width: 0.8rem;
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: ${COLOR.MAIN.MINT};
    }
  }
`;
