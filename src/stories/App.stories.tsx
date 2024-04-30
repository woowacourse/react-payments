import type { Meta, StoryObj } from '@storybook/react';
import PayMents from '../components/payments/Payments';

const meta = {
  title: 'App',
  component: PayMents,
} satisfies Meta<typeof PayMents>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
