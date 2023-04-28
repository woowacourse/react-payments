import styled from 'styled-components';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export const Input = styled(StyledCardRegister.Input)`
  width: 43px;
  height: 45px;
  font-size: 12px;

  &[type='password'] {
    font-size: 24px;
    background-color: transparent;
  }
`;

export const FieldSet = styled(StyledCardRegister.FieldSet)`
  & input:not(:last-child) {
    margin-right: 10px;
  }
`;

export const InputBackground = styled(StyledCardRegister.InputBackground)`
  justify-content: flex-start;
  background-color: transparent;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
