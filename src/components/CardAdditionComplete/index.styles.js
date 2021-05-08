import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/style';

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

  .card-form-btns {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
      cursor: pointer;
      width: 3rem;
      height: 2rem;
    }
  }
`;
