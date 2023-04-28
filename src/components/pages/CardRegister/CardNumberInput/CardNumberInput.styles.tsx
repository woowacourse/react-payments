import styled from 'styled-components';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export const Input = styled(StyledCardRegister.Input)`
  width: 20%;
  height: 100%;
  font-size: 14px;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #ecebf1 inset !important;
  }
`;

export const Divider = styled.span<{
  show?: boolean;
}>`
  ${({ show }) => !show && `visibility: hidden`}
`;
