import type { Meta } from '@storybook/react';
import { ModalProvider } from '../../contexts/ModalContext';
import Modal from '../../components/common/Modal/Modal';
import { useModalContext } from '../../contexts/ModalContext';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
  const { openModal } = useModalContext();

  openModal();

  return (
    <Modal>
      <div>Modal Content</div>
    </Modal>
  );
};
