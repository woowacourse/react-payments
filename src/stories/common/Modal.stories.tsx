import { Meta, StoryObj } from '@storybook/react';
import Modal from '../../components/common/Modal';
import SelectBank from '../../components/card/SelectBank';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};

export const Bank: Story = {
  args: {
    children: <SelectBank />,
  },
};
