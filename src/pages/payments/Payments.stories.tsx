import type { Meta, StoryObj } from '@storybook/react';

import Payments from './Payments';

const meta = {
  title: 'Payments',
  component: Payments,
} satisfies Meta<typeof Payments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
