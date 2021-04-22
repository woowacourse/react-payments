import styled from 'styled-components';

interface Props {
  underline?: boolean;
  textCenter?: boolean;
}

const Input = styled.input<Props>`
  height: 2rem;
  padding: 0 1rem;
  border: none;
  outline: none;
  font-size: 1.125rem;
  ${({ textCenter }) => textCenter && `text-align: center;`}
  ${({ underline }) => underline && `border-bottom: 1px solid #737373;`}
`;

export default Input;
