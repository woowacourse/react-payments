import styled from 'styled-components';

export const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const ButtonStyled = styled.button(({ color }) => `
  cursor: pointer;
  color: var(--button-font-color);
  background-color: var(${color});
  border: 0;
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  width: 100%;
  height: 35px;

  &:disabled {
    cursor: default;
    background-color: var(--disabled-button-background-color);
  }
`);
