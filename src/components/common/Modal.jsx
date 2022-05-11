import styled from 'styled-components';
import { PRIMARY_BG_COLOR, DIMMED_PRIMARY_BG_COLOR } from '../../theme';

const ModalContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  background-color: ${DIMMED_PRIMARY_BG_COLOR};
  z-index: 999;
`;

const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  background-color: ${PRIMARY_BG_COLOR};
  border-radius: 8px 8px 0 0;
  width: ${props => props.width}px;
  height: ${props => `${props.height / 4}px`};
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 0 auto;
  padding: 16px;
  z-index: 1000;
  overflow-y: auto;
  animation: slide-up 0.2s 0s ease;

  @keyframes slide-up {
    0% {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      height: 0;
      opacity: 0;
    }

    100% {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }
`;

const S = {
  ModalContainer,
  ModalOverlay,
  ModalInner,
};

function Modal({ isOpen, setIsOpen, dimensions: { width, height }, children }) {
  return (
    <S.ModalContainer isOpen={isOpen}>
      <S.ModalOverlay
        onClick={e => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
        isOpen={isOpen}
        width={width}
        height={height}>
        <S.ModalInner width={width} height={height}>
          {children}
        </S.ModalInner>
      </S.ModalOverlay>
    </S.ModalContainer>
  );
}

export default Modal;
