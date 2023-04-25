import styled from 'styled-components';

const Input = styled.input<{ textAlign?: string }>`
  width: 100%;
  height: 100%;

  border: none;
  background: none;

  font-weight: 600;
  font-size: 18px;

  outline: none;
  text-align: ${({ textAlign }) => textAlign || 'center'};
`;

export default Input;
