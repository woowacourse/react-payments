import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Input = styled.input`
  width: ${({ width }) => width};
  font-size: 18px;
  color: ${PALETTE.INPUT_TEXT_GRAY};
  background-color: transparent;
  border-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Divider = styled.span`
  font-size: 18px;
  color: ${PALETTE.DEFAULT_CYAN};
  margin: 0 4px;
`;

export { Input, Divider };
