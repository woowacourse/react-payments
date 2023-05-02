import styled from 'styled-components';
import { BaseInput } from '../../../@common/Input/InputStyles.styles';
import { InputBackgroundProps } from '../../../../types/input.type';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
`;

export const Input = styled.input`
  ${BaseInput}
  padding: 0 20px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const InputBackground = styled.div<InputBackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: ${({ isValid }) => (isValid ? 'none' : '2px solid #c81717')};

  background: #ecebf1;
  width: 137px;
  height: 48.75px;
  margin-top: 8px;
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
