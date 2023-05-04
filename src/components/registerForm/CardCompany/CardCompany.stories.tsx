import { Meta } from "@storybook/react";
import React from "react";
import CardCompany from ".";
import { ModalProvider, useModal, Modal } from "@hozzijeong/react-modal";

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
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div>
        <button onClick={openModal}>모달 열기</button>
        {isModalOpen && (
          <Modal closeEvent={closeModal} direction="bottom">
            <CardCompany closeEvent={closeModal} />
          </Modal>
        )}
      </div>
      <div id="modal-root"></div>
    </div>
  );
};
