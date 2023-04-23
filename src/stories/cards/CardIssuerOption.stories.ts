import type { Meta, StoryObj } from '@storybook/react';
import CardIssuerOption from '../../components/CardAddForm/CardIssuer/CardIssuerSelection/CardIssuerOption/CardIssuerOption';

const meta = {
  title: 'Payments/Cards/CardIssuerOption',
  component: CardIssuerOption,
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuerOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    issuer: 'BC카드',
    onClick: () => {},
  },
};

export const ShinhanCard: Story = {
  args: {
    issuer: '신한카드',
    onClick: () => {},
  },
};

export const KakaoBank: Story = {
  args: {
    issuer: '카카오뱅크',
    onClick: () => {},
  },
};

export const HyundaiCard: Story = {
  args: {
    issuer: '현대카드',
    onClick: () => {},
  },
};

export const WooriCard: Story = {
  args: {
    issuer: '우리카드',
    onClick: () => {},
  },
};

export const LotteCard: Story = {
  args: {
    issuer: '롯데카드',
    onClick: () => {},
  },
};

export const HanaCard: Story = {
  args: {
    issuer: '하나카드',
    onClick: () => {},
  },
};

export const KBCard: Story = {
  args: {
    issuer: '국민카드',
    onClick: () => {},
  },
};
