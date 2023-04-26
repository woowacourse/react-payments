import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default function Modal({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}
