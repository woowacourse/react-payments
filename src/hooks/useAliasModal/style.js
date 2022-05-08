import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  padding: 130px 0 16px;
  background-color: var(--toast-background-color);
`;

export const TitleStyled = styled.h1`
  text-align: center;
  font-size: 24px;
  color: var(--card-complete-color);
`;

export const InputStyled = styled.input`
  padding: 6px;
  margin-top: 33px;
  text-align: center;
  font-size: 18px;
  outline: none;
  color: var(--card-complete-color);
  border: none;
  border-bottom: 1px solid var(--unselected-company);
`;
