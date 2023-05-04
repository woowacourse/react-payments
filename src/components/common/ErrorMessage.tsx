import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type ErrorMessageProps = HTMLAttributes<HTMLParagraphElement>;

export function ErrorMessage({ children, ...props }: ErrorMessageProps) {
  return <_ErrorMessage {...props}>{children}</_ErrorMessage>;
}

const _ErrorMessage = styled.p`
  position: absolute;
  top: 6rem;
  left: 0.3rem;
  height: 1rem;
  color: red;
`;
