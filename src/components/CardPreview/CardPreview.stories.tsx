import { Meta, StoryObj } from '@storybook/react';

import CardPreview from './index';

const meta: Meta<typeof CardPreview> = {
  title: 'CardPreview',
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const VisaCard: Story = {
  args: {
    cardNumbers: ['4123', '4567', '8901', '2345'],
    period: {
      month: '08',
      year: '26',
    },
    userName: 'BINGBONG',
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: ['5123', '4567', '8901', '2345'],
    period: {
      month: '05',
      year: '25',
    },
    userName: 'BINGBONG',
  },
};

export const ETC: Story = {
  args: {
    cardNumbers: ['1234', '5678', '9012', '3456'],
    period: {
      month: '12',
      year: '24',
    },
    userName: 'BINGBONG',
  },
};
