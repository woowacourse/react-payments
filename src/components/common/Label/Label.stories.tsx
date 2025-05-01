import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components';

const meta = {
  title: 'Components/Common/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '입력 필드의 레이블을 표시하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '카드 번호',
    id: 'card-number',
  },
};

export const Required: Story = {
  args: {
    children: '카드 번호 *',
    id: 'card-number-required',
  },
};
