import { flexCenter } from '../../../../styles/mixin';
import styled from 'styled-components';

export const Input = styled.input<{ masking?: boolean }>`
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-align: center;

  ${({ masking }) => masking && `-webkit-text-security: disc`};

  ${({ theme: { registerFormInput } }) => registerFormInput};
`;

export const FieldSet = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
`;

export const InputBackground = styled.div`
  ${flexCenter};
  border-radius: 7px;
  border: none;

  background: #ecebf1;
  width: 100%;
  height: 48.75px;
  margin-top: 8px;
`;

export const Legend = styled.legend`
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.gray2};
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const StyledCardRegister = Object.assign(
  {},
  {
    Input,
    FieldSet,
    InputBackground,
    Legend,
    Label,
  }
);
