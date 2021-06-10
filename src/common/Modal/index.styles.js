import styled from 'styled-components';
import { COLOR } from '../../constants/style';

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLOR.MODAL.BG};
  transition: opacity 0.25s ease;
  z-index: 2;
`;

export const ModalInner = styled.div`
  transition: top 0.25s ease;
  width: 100%;
  height: 270px;
  margin: auto;
  overflow: auto;
  background: ${COLOR.MAIN.WHITE};
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
  }
`;
