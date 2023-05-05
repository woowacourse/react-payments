import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalWithHooks = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={modalOpen}>열기</button>
      <Modal isOpen={isModalOpen} closeModal={modalClose}>
        <div>content</div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <ModalWithHooks />;
  },
};
