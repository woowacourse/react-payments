import { Meta } from "@storybook/react";
import React from "react";
import CardCompany from ".";
import { ModalProvider } from "src/context/ModalContext";
import useModal from "src/hooks/useModal";
import Modal from "src/components/@common/Modal";

const cardNumber = {
  component: CardCompany,
  title: "Card Company Input",
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <Story />
        </ModalProvider>
      );
    },
  ],
} satisfies Meta<typeof CardCompany>;

export default cardNumber;

export const Example = () => {
  const { isModalOpen, openModal, closeModal, modalRef } = useModal();

  return (
    <div>
      <div>
        <button onClick={openModal}>모달 열기</button>
        {isModalOpen && (
          <Modal dialogRef={modalRef} closeEvent={closeModal}>
            <CardCompany closeEvent={closeModal} />
          </Modal>
        )}
      </div>
      <div id="modal-root"></div>
    </div>
  );
};
