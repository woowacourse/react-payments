import type { Meta, StoryObj } from '@storybook/react';
import PaymentsHeader from '../components/payments/PaymentsHeader';

const meta: Meta<typeof PaymentsHeader> = {
  title: 'PaymentsHeader',
  component: PaymentsHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '보유카드',
  },
};

export const AddCard: Story = {
  args: {
    title: '카드 추가',
  },
};
