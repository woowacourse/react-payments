import type { Meta, StoryObj } from '@storybook/react';
import CardSpinner from '../components/payments/CardSpinner';

const meta: Meta<typeof CardSpinner> = {
  title: 'CardSpinner',
  component: CardSpinner,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
