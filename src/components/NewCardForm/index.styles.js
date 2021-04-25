import styled from 'styled-components';
import { FONT_SIZE } from '../../constants/constants';

export const NewCardFormWrapper = styled.form`
  .form__column {
    margin-bottom: 10px;

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
  }
`;
