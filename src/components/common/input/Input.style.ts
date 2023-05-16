import styled, { css } from 'styled-components';

export interface InputProps {
  primary?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  inputSize?: 'small' | 'medium' | 'large';
  width?: string;
  hasError?: boolean;
}

const getSizeStyles = (size: InputProps['inputSize']) => {
  switch (size) {
    case 'small':
      return `
        font-size: var(--font-size-small));
        padding: 0 1.2rem;
      `;
    case 'medium':
      return `
        font-size: var(--font-size-medium));
        padding: 0 1.4rem;
      `;
    case 'large':
      return `
        font-size: var(--font-size-large));
        padding: 0 1.6rem;
      `;
    default:
      return `
      font-size: var(--font-size-small));
      padding: 0 0.5rem;
    `;
  }
};

export const Input = styled.input<InputProps>`
  height: 45px;
  letter-spacing: 1.1px;
  font-weight: 600;
  background-color: var(--gray-light);
  border-radius: 7px;
  border: ${(props) => (props.hasError ? '2px solid var(--error-color)' : 'none')};
  text-align: ${({ textAlign }) => textAlign ?? 'center'};
  width: ${({ width }) => width ?? '100%'};

  ${({ inputSize: size }) => getSizeStyles(size)}

  ${({ primary }) =>
    primary &&
    css`
      box-shadow: 1px 1px 1px var(--primary-color);
    `}

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

export default Input;
