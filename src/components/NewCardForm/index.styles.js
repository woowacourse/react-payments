import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/constant';

export const NewCardFormWrapper = styled.form`
  width: 25rem;

  .input-alert {
    padding: 3px;
    font-size: ${FONT_SIZE.MINI};
    color: ${COLOR.CARD.RED};
    min-height: 1.2rem;
  }

  .card-form-btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 2.5rem;

    button {
      width: 3rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;
