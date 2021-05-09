import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../constants/constant';

export const NewCardFormWrapper = styled.form`
  width: 25rem;
  height: 100%;
  position: relative;

  .input-alert {
    padding: 3px;
    font-size: ${FONT_SIZE.MINI};
    color: ${COLOR.RED};
    min-height: 1.2rem;
  }
`;
