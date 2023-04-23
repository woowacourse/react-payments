import styled from "styled-components";
import { BaseInput } from "../../../@common/Input/InputStyles.styles";

export const Input = styled.input`
  ${BaseInput}
  width: 30%;
  text-align: center;
  padding: 0;
`;

export const FieldSet = styled.fieldset`
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
  width: 137px;
  height: 48.75px;
  margin-top: 8px;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
