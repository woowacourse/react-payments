import styled from "styled-components";
import { DIMMED_PRIMARY_BG_COLOR, PRIMARY_BG_COLOR } from "style";

interface ModalContainerProps {
  isOpen: boolean;
}

interface ModalOverlayProps {
  isOpen: boolean;
  width: number;
  height: number;
}

interface ModalInnerProps {
  width: number;
  height: number;
}

const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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

const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  background-color: ${DIMMED_PRIMARY_BG_COLOR};
  z-index: 999;
`;

const ModalInner = styled.div<ModalInnerProps>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  background-color: ${PRIMARY_BG_COLOR};
  border-radius: 8px 8px 0 0;
  width: ${(props) => props.width}px;
  height: 300px;
  top: calc(${(props) => `${props.height - 300}px`});
  margin: 0 auto;
  padding: 16px;
  z-index: 1000;
  animation: slide-up 0.2s 0s ease;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(50%);
      top: calc(${(props) => `${props.height - 50}px`});
      height: 0;
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      top: calc(${(props) => `${props.height - 300}px`});
      height: 300px;
      opacity: 1;
    }
  }
`;

export { ModalContainer, ModalOverlay, ModalInner };
