import { Meta, StoryObj } from '@storybook/react';

import ExpirationPeriodInput from './index';

const meta: Meta<typeof ExpirationPeriodInput> = {
  title: 'CardInput Container',
  component: ExpirationPeriodInput,
  args: {
    maxLength: 2,
    period: { month: '', year: '' },
    periodErrors: { month: false, year: false, expired: false },
    onPeriodChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof ExpirationPeriodInput>;

export const ExpirationPeriod: Story = {};
