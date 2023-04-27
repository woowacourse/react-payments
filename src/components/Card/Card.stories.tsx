import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  component: Card,
  title: 'Section/Card',
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardNumbers: {
    0: '1111',
    1: '2222',
    2: '3333',
    3: '4444',
  },
  expiredDate: {
    0: '12',
    1: '31',
  },
  cardOwnerName: 'NAME',
  cardCompany: '',
};

export const HyundaiCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '현대카드',
  },
};

export const ShinhanCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '신한카드',
  },
};

export const BCCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: 'BC카드',
  },
};

export const KakaoCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '카카오뱅크',
  },
};

export const WooriCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '우리카드',
  },
};

export const LotteCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '롯데카드',
  },
};

export const HanaCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '하나카드',
  },
};

export const KookminCard: Story = {
  args: {
    ...defaultArgs,
    cardCompany: '국민카드',
  },
};
