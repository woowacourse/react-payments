import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryFn<typeof Modal>;

export const ModalFrame: Story = () => {
  const { isModalOpen, closeModal } = useModal();

  return <Modal isModalOpen={isModalOpen} closeModal={closeModal} />;
};
