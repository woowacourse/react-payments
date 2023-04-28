import styled from 'styled-components';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export const Input = styled.input`
  width: 30%;
  height: 100%;
  font-size: 12px;
  text-align: center;

  ${({ theme: { registerFormInput } }) => registerFormInput};
`;

export const InputBackground = styled(StyledCardRegister.InputBackground)`
  width: 137px;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
