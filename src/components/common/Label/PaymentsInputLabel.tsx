import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  required?: boolean;
};

export const PaymentsInputLabel = (props: PropsWithChildren<Props>) => {
  const { children, required } = props;

  return <InputLabel {...props}>{children}</InputLabel>;
};

const InputLabel = styled.span<Props>`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: #525252;
  margin-top: 19px;
  margin-bottom: 3px;

  &::after {
    ${({ required }) =>
      required &&
      css`
        content: ' *';
        color: #ff0000;
      `}
  }
`;
