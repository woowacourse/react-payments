import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../../../components/common/ErrorMessage';

const meta = {
  title: 'ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메시지입니다.',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
