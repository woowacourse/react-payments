import type { Meta, StoryObj } from '@storybook/react';

import CardItem from '../components/CardItem';

const meta: Meta<typeof CardItem> = {
  title: 'components/CardItem',
  component: CardItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardItem>;

const DEFAULT_DATA = {
  number: { first: '0000', second: '0000' },
  expiredDate: { month: '12', year: '24' },
};

export const BC: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: 'BC카드', owner: 'WOOWA' },
  },
};

export const Shinhan: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '신한카드', owner: 'WOOWA' },
  },
};

export const Kakaobank: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '카카오뱅크', owner: 'WOOWA' },
  },
};

export const Hyundai: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '현대카드', owner: 'WOOWA' },
  },
};

export const Woori: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '우리카드', owner: 'WOOWA' },
  },
};

export const Lotte: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '롯데카드', owner: 'WOOWA' },
  },
};

export const Hana: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '하나카드', owner: 'WOOWA' },
  },
};

export const KB: Story = {
  args: {
    cardData: { ...DEFAULT_DATA, company: '국민카드', owner: 'WOOWA' },
  },
};
