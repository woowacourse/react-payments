import styled, { css } from 'styled-components';
import { Props } from '.';
import PALETTE from '../../../constants/palette';

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${PALETTE.TRANSLUCENT_BLACK_9};
`;

export const ModalInner = styled.div<Pick<Props, 'type'>>`
  position: relative;
  width: 100%;
  background: white;
  ${({ type }) => (type === 'full' ? fullType : bottomType)};
`;

const bottomType = css`
  margin-top: auto;
  height: 16rem;
  border-radius: 1rem 1rem 0 0;
`;

const fullType = css`
  height: 100vh;
`;
