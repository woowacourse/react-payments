import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../components/common/Modal/Modal';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: ({ ...args }) => (
    <Modal {...args}>
      <div>Modal Content</div>
    </Modal>
  ),
  args: {
    isOpen: true,
  },
};
