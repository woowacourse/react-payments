import styled from 'styled-components';
import { BaseInput } from '../../../@common/Input/InputStyles.styles';

export const Input = styled.input`
  ${BaseInput}
  padding: 0 20px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const InputBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48.75px;
  margin-top: 8px;

  border: none;
  border-radius: 7px;

  background: #ecebf1;
`;

export const Divider = styled.span<{
  show?: boolean;
}>`
  ${({ show }) => !show && 'visibility: hidden'}
`;
