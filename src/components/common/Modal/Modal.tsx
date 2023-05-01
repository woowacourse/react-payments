import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Z_INDEX_INFO } from '../../../constants/constant';

export default function Modal({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modalBlack};
  z-index: ${Z_INDEX_INFO.MODAL};
`;
