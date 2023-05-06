import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../components/Spinner/Spinner';

const meta = {
  component: Spinner,
  title: 'Spinner',
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};

export default meta;
