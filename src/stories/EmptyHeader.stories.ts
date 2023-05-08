import type { Meta, StoryObj } from '@storybook/react';
import EmptyHeader from '../components/EmptyHeader/EmptyHeader';

const meta = {
  component: EmptyHeader,
  title: 'EmptyHeader',
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
