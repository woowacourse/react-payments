import type { Meta, StoryObj } from '@storybook/react';

import CompanyItem from '../components/CardCompanyModal/CompanyItem';

const meta: Meta<typeof CompanyItem> = {
  title: 'components/CompanyItem',
  component: CompanyItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompanyItem>;

export const BC: Story = {
  args: {
    name: 'BC카드',
  },
};

export const Shinhan: Story = {
  args: {
    name: '신한카드',
  },
};

export const Kakaobank: Story = {
  args: {
    name: '카카오뱅크',
  },
};

export const Hyundai: Story = {
  args: {
    name: '현대카드',
  },
};

export const Woori: Story = {
  args: {
    name: '우리카드',
  },
};

export const Lotte: Story = {
  args: {
    name: '롯데카드',
  },
};

export const Hana: Story = {
  args: {
    name: '하나카드',
  },
};

export const KB: Story = {
  args: {
    name: '국민카드',
  },
};
