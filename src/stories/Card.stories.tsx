import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

const DEFAULT_ARGS = {
  cardNumber1: '0000',
  cardNumber2: '0000',
  expiredMonth: '12',
  expiredYear: '24',
};

export const Default: Story = {
  args: DEFAULT_ARGS,
};

export const NoOwnerName: Story = {
  args: {
    ...DEFAULT_ARGS,
    owner: 'WOOWA',
  },
};

export const BC: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: 'BC카드',
    owner: 'WOOWA',
  },
};

export const Shinhan: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '신한카드',
    owner: 'WOOWA',
  },
};

export const Kakaobank: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '카카오뱅크',
    owner: 'WOOWA',
  },
};

export const Hyundai: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '현대카드',
    owner: 'WOOWA',
  },
};

export const Woori: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '우리카드',
    owner: 'WOOWA',
  },
};

export const Lotte: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '롯데카드',
    owner: 'WOOWA',
  },
};

export const Hana: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '하나카드',
    owner: 'WOOWA',
  },
};

export const KB: Story = {
  args: {
    ...DEFAULT_ARGS,
    company: '국민카드',
    owner: 'WOOWA',
  },
};
