import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: ${({ visible }) => (visible ? 0 : -100)}%;
  padding: 70px 20px 16px;
  background-color: var(--toast-background-color);
  transition: right 0.4s linear;
`;

export const TitleStyled = styled.h1`
  margin: 0 0 50px;
  text-align: center;
  font-size: 24px;
  color: var(--card-alias-color);
`;

export const InputStyled = styled.input`
  padding: 6px;
  text-align: center;
  font-size: 18px;
  outline: none;
  color: var(--card-alias-color);
  border: none;
  border-bottom: 1px solid var(--unselected-company);
`;
