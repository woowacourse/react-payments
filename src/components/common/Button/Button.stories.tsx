import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';

const meta = {
  title: 'Components/Common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '기본 버튼 컴포넌트입니다. 클릭 가능한 액션을 표시합니다.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '결제하기',
  },
};

export const Disabled: Story = {
  args: {
    children: '결제하기',
    disabled: true,
  },
};

export const Fixed: Story = {
  args: {
    children: '결제하기',
    isFixed: true,
  },
};
