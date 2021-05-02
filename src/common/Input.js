import styled, { css } from 'styled-components';
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../constants/constant.js';

const NickNameInput = css`
  color: #383838;
  background-color: white;
  font-weight: ${FONT_WEIGHT.LIGHT};
  font-size: ${FONT_SIZE.LARGE};
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
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${COLOR.MINT};
  background-color: ${COLOR.DEFAULT_BG};
  height: 2.8125rem;
  border: 0;
  padding: 0 0.5rem;
  border-radius: 7px;
  width: ${({ width }) => width || '100%'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ roundInput }) => roundInput && RoundInput};
  ${({ nickNameInput }) => nickNameInput && NickNameInput}

  &:focus {
    outline: none;
    background-color: #d1cee0;
  }
`;

export default Input;
