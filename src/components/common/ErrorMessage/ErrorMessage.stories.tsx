import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '@/components';

const meta = {
  title: 'Components/Common/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '에러 메시지를 표시하는 컴포넌트입니다. 메시지가 없으면 렌더링되지 않습니다.',
      },
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '카드 번호는 4자리의 숫자로 입력해주세요.',
  },
};

export const Empty: Story = {
  args: {
    children: '',
  },
};
