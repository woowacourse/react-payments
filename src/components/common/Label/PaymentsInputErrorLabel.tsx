import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const PaymentsInputErrorLabel = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: #f72121;
`;
