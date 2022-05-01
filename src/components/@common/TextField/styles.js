import styled from '@emotion/styled';
import { COLORS, LAYOUT } from 'styles/theme';

const Container = styled.input`
  background-color: ${COLORS.athensGray};
  height: 2.813rem;
  width: 100%;
  font-family: 'NanumBarunGothic';
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: 1px solid ${COLORS.athensGray};
  border-radius: ${LAYOUT.BORDER_RADIUS};
  transition: border-color ease 0.2s;
  padding: 0rem 0.625rem;

  &[type='number'] {
    -moz-appearance: number;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default Container;
