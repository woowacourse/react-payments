import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/constants';

export const NewCardFormWrapper = styled.form`
  .form__column {
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

      input {
        width: 4.375rem;
        margin: 0 2px;
        font-size: inherit;
      }

      .input-separator {
        display: inline-block;
        width: 0.8rem;
        height: 45px;
        line-height: 41px;
        text-align: center;
        color: ${COLOR.MAIN.MINT};
      }

      .gray {
        color: ${COLOR.MAIN.DEFAULT};
      }
    }

    .input-main {
      display: flex;
      align-items: center;
    }
  }
`;
