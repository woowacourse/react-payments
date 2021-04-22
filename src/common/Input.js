import styled, { css } from 'styled-components';
import { COLOR, FONT_WEIGHT } from '../global.styles';

const NickNameInput = css`
  color: #383838;
  background-color: white;
  font-weight: ${FONT_WEIGHT.LIGHT};
  border-radius: 0;
  border-bottom: 1px solid #737373;
`;

const RoundInput = css`
  width: 2.3125rem;
  height: 2.3125rem;
  border-radius: 50%;
  padding: 0;
`;

const Input = styled.input`
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${COLOR.MAIN.MINT};
  background-color: ${COLOR.INPUT.DEFAULT_BG};
  height: 2.8125rem;
  border: 0;
  padding: 0 0.5rem;
  border-radius: 7px;
  width: ${({ width }) => width || '100%'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ roundInput }) => roundInput && RoundInput};
  ${({ nickNameInput }) => nickNameInput && NickNameInput}
`;

export default Input;
