import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  // render: (args) => <Card {...args} />,
  args: {
    cardCompany: null,
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};

export const BCCard: Story = {
  args: {
    cardCompany: 'BC카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};

export const ShinhanCard: Story = {
  args: {
    cardCompany: '신한카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const KakaobankCard: Story = {
  args: {
    cardCompany: '카카오뱅크',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const HyundaiCard: Story = {
  args: {
    cardCompany: '현대카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const WooriCard: Story = {
  args: {
    cardCompany: '우리카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const LotteCard: Story = {
  args: {
    cardCompany: '롯데카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const HanaCard: Story = {
  args: {
    cardCompany: '하나카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
export const KBCard: Story = {
  args: {
    cardCompany: '국민카드',
    cardNumber1: '0000',
    cardNumber2: '0000',
    expiredMonth: '12',
    expiredYear: '24',
    owner: 'WOOWA',
  },
};
