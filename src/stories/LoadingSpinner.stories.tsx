import { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '../components/@common/LoadingSpinner';

const meta = {
  component: LoadingSpinner,
  title: 'Item/LoadingSpinner',
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: '60px',
  },
};
