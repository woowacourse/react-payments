import type { Meta, StoryObj } from '@storybook/react';

import { CardExpirationPeriodInput } from '../components';

const meta = {
  title: 'Input',
  component: CardExpirationPeriodInput,
} satisfies Meta<typeof CardExpirationPeriodInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExpirationPeriodInputDefault: Story = {
  args: {
    editCardPeriod: () => {},
  },
};
