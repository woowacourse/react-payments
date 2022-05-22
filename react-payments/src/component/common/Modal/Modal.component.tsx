import { CardControlModalProps } from "component/CardControlModal/CardControlModal";
import { DispatchWithoutAction } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { RowFlexWrapper } from "styles/wrapper";

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
`;

const ModalBox = styled(RowFlexWrapper)<{ styleType: string | undefined }>`
  width: 380px;
  ${({ styleType }) =>
    styleType === "edit"
      ? css`
          height: 100px;
        `
      : css`
          height: 220px;
        `}
  border-radius: 5px 5px 0 0;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.pageDefault};
`;

interface ModalProps extends Pick<CardControlModalProps, "toggleModal"> {
  children: React.ReactNode;
  styleType: string | undefined;
}

const Modal = ({ toggleModal, children, styleType }: ModalProps) => {
  return (
    <DimmedModal onClick={toggleModal}>
      <ModalBox styleType={styleType}>{children}</ModalBox>
    </DimmedModal>
  );
};

export default Modal;
