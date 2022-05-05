import styled from 'styled-components';

const InputStyled = styled.input(({ width, color }) => `
  width: ${width || '100%'};
  height: 45px;
  background-color: var(--input-background-color);
  border-radius: 0.25rem;
  border-color: var(--input-border-color);
  padding-left: 5px;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  font-weight: 600;
  color: var(${color});
  
  &::placeholder {
    color: var(${color});
  } 
`);

export default InputStyled;
