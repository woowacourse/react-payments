import styled from 'styled-components';
import { BaseInput } from '../../../@common/Input/InputStyles.styles';

export const Input = styled.input`
  ${BaseInput}
  width: 20%;
  text-align: center;
`;

export const FieldSet = styled.fieldset`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
`;

export const Legend = styled.legend`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const InputBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: none;

  background: #ecebf1;
  width: 100%;
  height: 48.75px;
  margin-top: 8px;
`;

export const Divider = styled.span<{
  show?: boolean;
}>`
  ${({ show }) => !show && `visibility: hidden`}
`;
