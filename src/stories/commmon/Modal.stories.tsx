import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProvider, useModalContext } from '@ashleysyheo/react-modal';
import Button from '../../components/common/Button/Button';

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
    const { isModalOpen, openModal } = useModalContext();

    return (
      <>
        <Button variant="default" onClick={openModal}>
          Open
        </Button>
        {isModalOpen && <Modal>{children}</Modal>}
      </>
    );
  },
};
