import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Result from '../components/Result';

const meta = {
  title: 'Components/Result',
  component: Result,
  tags: ['autodocs'],
  args: {
    action: fn(),
  },
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    message: '카드 등록이 완료되었습니다.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: '카드 등록에 실패하였습니다.',
  },
};
