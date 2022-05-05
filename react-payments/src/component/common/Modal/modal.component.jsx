import styled from "styled-components";

const DimmedModal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);

  z-index: 5;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 220px;
  border-radius: 5px 5px 0px 0px;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.pageDefault};
  z-index: 10;
`;

const Modal = ({ toggleModal, children }) => {
  return (
    <DimmedModal onClick={toggleModal}>
      <ModalBox>{children}</ModalBox>
    </DimmedModal>
  );
};

export default Modal;
