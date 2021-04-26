import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../../constants/constants';

export const NewCardFormWrapper = styled.form`
  width: 25rem;

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

    .expire-date-container {
      width: 40%;

      input[name='month'] {
        text-align: right;
      }

      input[name='year'] {
        text-align: left;
      }
    }

    .input-alert {
      padding: 3px;
      font-size: ${FONT_SIZE.MINI};
      color: ${COLOR.CARD.RED};
    }

    .input-main {
      display: flex;
      align-items: center;
    }

    .cvc-container {
      width: 40%;

      input {
        margin-right: 0.5rem;
      }

      .help {
        border-radius: 50%;
        border: 1px solid #bababa;
        min-height: 2rem;
        min-width: 2rem;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
        color: #969696;
        font-size: 1.25rem;
      }
    }

    .password-container {
      width: 50%;

      input {
        margin-right: 0.5rem;
        width: 3rem;
      }

      .privacy-dot {
        font-weight: ${FONT_WEIGHT.BOLD};
        font-size: ${FONT_SIZE.MINI};
        color: ${COLOR.MAIN.MINT};
        padding: 0 0.5rem;
        width: 3rem;
        height: 2.8125rem;
        margin-right: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
