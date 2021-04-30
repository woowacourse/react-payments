import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/constant';

export const CardAdditionCompleteWrapper = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form__column {
    width: 80%;

    margin-bottom: 2rem;
    text-align: center;

    h1 {
      font-size: ${FONT_SIZE.XLARGE};
      font-weight: ${FONT_WEIGHT.BOLD};
    }

    &.card-info {
      height: 12rem;
    }
  }
`;
