import type { Meta, StoryObj } from '@storybook/react';
import { ModalProvider } from '../../contexts/ModalContext';
import Modal from '../../components/common/Modal/Modal';
import { useModalContext } from '../../contexts/ModalContext';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: <div>Modal Content</div>,
  },

  render: ({ children }) => {
    const { openModal } = useModalContext();

    openModal();

    return <Modal>{children}</Modal>;
  },
};
