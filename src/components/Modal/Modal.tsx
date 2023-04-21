import styled from "styled-components";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <ModalBackDrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackDrop>
  );
};

const ModalBackDrop = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;

  padding: 20px;

  width: 100%;
  height: 30%;

  border-radius: 5px 0px;

  bottom: 0;

  background: #f5f5f5;
`;
export default Modal;
