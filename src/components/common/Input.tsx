import styled from 'styled-components';

interface Props {
  underline?: boolean;
  textCenter?: boolean;
  width?: string;
}

const Input = styled.input<Props>`
  height: 3.375rem;
  border: none;
  outline: none;
  font-size: 1.125rem;
  background-color: transparent;
  width: ${({ width }) => width || '100%'};
  ${({ textCenter }) => textCenter && `text-align: center;`}
  ${({ underline }) => underline && `border-bottom: 1px solid #737373;`}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default Input;
