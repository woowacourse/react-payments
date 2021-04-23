import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Input = styled.input`
  width: ${({ width }) => width};
  font-size: 18px;
  color: ${PALETTE.INPUT_TEXT_GRAY};
  border-color: transparent;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export { Input };
