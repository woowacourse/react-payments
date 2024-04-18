import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '../components';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Visa: Story = {
  args: {
    cardInfo: {
      number: '4123 1111 ···· ····',
      mark: 'visa',
      period: { month: '04', year: '24' },
      userName: 'BADA',
      color: 'default',
    },
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      number: '5123 1111 ···· ····',
      mark: 'master',
      period: { month: '04', year: '24' },
      userName: 'BINGBONG',
      color: 'default',
    },
  },
};

export const Etc: Story = {
  args: {
    cardInfo: {
      number: '2123 1111 ···· ····',
      mark: 'etc',
      period: { month: '04', year: '24' },
      userName: 'JOON',
      color: 'default',
    },
  },
};
