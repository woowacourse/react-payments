import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../constants/style';

export const CardUserInputWrapper = styled.div`
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

  .input-alert {
    padding: 3px;
    font-size: ${FONT_SIZE.MINI};
    color: ${COLOR.CARD.RED};
  }
`;
