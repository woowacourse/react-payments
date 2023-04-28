import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface ModalProps {
  width?: string;
  height?: string;
  element: JSX.Element;
  modal: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
}

export const Modal = (props: ModalProps) => {
  const { width, height, element, setModal } = props;
  const closeModal = () => {
    if (setModal) {
      setModal(false);
    }
  };

  return (
    <>
      <Container width={width} height={height}>
        <div className="exit-wrapper" onClick={closeModal}></div>
        <Wrapper>{element}</Wrapper>
      </Container>
      <Canvas onClick={closeModal} />
    </>
  );
};

const Container = styled.div<{ width?: string; height?: string }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: calc(50vw - ${(props) => props.width}px / 2);
  bottom: 0;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  padding: 8px;
  background-color: white;
  border-radius: 8px;
  z-index: 2000;
  .exit-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 32px;
    width: 32px;
    height: 32px;
    line-height: 26px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Canvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 53;
`;

const Wrapper = styled.div`
  background-color: transparent;
`;

export default Modal;
