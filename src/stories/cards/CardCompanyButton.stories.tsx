import type { Meta, StoryObj } from '@storybook/react';
import CardCompanyButton from '../../components/CardCompanyButton';

const meta = {
  title: 'components/cards/CardCompanyButton',
  component: CardCompanyButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CardCompanyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    cardCompany: 'BC카드',
  },
};

export const ShinhanCard: Story = {
  args: {
    cardCompany: '신한카드',
  },
};
export const KakaobankCard: Story = {
  args: {
    cardCompany: '카카오뱅크',
  },
};
export const HyundaiCard: Story = {
  args: {
    cardCompany: '현대카드',
  },
};
export const WooriCard: Story = {
  args: {
    cardCompany: '우리카드',
  },
};
export const LotteCard: Story = {
  args: {
    cardCompany: '롯데카드',
  },
};
export const HanaCard: Story = {
  args: {
    cardCompany: '하나카드',
  },
};
export const KBCard: Story = {
  args: {
    cardCompany: '국민카드',
  },
};
