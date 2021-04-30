import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../../../constants/constant';

export const CardPasswordInputWrapper = styled.div`
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

  .input-main {
    display: flex;
    align-items: center;
  }

  .password-container {
    width: 50%;

    input {
      margin-right: 0.5rem;
      width: 3rem;
    }

    .privacy-dot {
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.NORMAL};
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

  .input-alert {
    padding: 3px;
    font-size: ${FONT_SIZE.MINI};
    color: ${COLOR.CARD.RED};
  }
`;
