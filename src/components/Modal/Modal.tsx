import styled from "styled-components";

type ModalProps = {
  modalOpen: boolean;
  children: React.ReactNode;
};

const Modal = ({ modalOpen, children }: ModalProps) => {
  return (
    <ModalBackDrop modalOpen={modalOpen}>
      <ModalContent>{children}</ModalContent>
    </ModalBackDrop>
  );
};

const ModalBackDrop = styled.div<{ modalOpen: boolean }>`
  display: ${({ modalOpen }) => (modalOpen ? "block" : "none")};

  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  z-index: 3;

  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  position: absolute;

  padding: 20px;

  width: 100%;
  height: 30%;

  border-radius: 5px 0px;

  bottom: 0;

  background: #f5f5f5;
`;
export default Modal;
