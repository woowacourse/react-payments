import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const meta = {
  component: ErrorMessage,
  title: 'ErrorMessage',
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '0부터 9까지 숫자만 입력이 가능합니다.',
  },
};
