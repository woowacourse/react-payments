import { Payments } from '@pages/payments';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Payments/Payments',
  component: Payments,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '결제할 카드 번호, 유효 기간, 소유자 이름을 입력 받아 카드 형태로 보여주는 Form 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Payments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
