import styled from 'styled-components';
import { StyledCardRegister } from '../@common/CardRegister.styles';

export const Input = styled(StyledCardRegister.Input)`
  font-size: 24px;
  padding: 0 20px;
`;

export const InputBackground = styled(StyledCardRegister.InputBackground)`
  width: 137px;
`;

export const Info = styled.button`
  display: center;
  justify-content: center;
  align-items: center;

  color: #444;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: white;
  font-size: 12px;
  margin-left: 10px;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
