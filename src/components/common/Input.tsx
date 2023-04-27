import styled from 'styled-components';

const Input = styled.input<{
  textAlign?: string;
  borderBottom?: string;
  width?: string;
}>`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  padding-bottom: 0.5rem;

  border: none;
  background: none;

  font-weight: 600;
  font-size: 18px;

  outline: none;
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
`;

export default Input;
