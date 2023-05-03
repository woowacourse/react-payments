import type { Meta, StoryObj } from '@storybook/react';
import CardIssuerOption from '../../components/CardAddForm/CardIssuer/CardIssuerSelection/CardIssuerOption/CardIssuerOption';

const meta = {
  title: 'Payments/Cards/CardIssuerOption',
  component: CardIssuerOption,
  argTypes: {
    issuer: {
      control: { type: 'select' },
      options: [
        'BC카드',
        '신한카드',
        '카카오뱅크',
        '현대카드',
        '우리카드',
        '롯데카드',
        '하나카드',
        '국민카드',
      ],
    },
  },
} satisfies Meta<typeof CardIssuerOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    issuer: 'BC카드',
  },
};

export const ShinhanCard: Story = {
  args: {
    issuer: '신한카드',
  },
};

export const KakaoBank: Story = {
  args: {
    issuer: '카카오뱅크',
  },
};

export const HyundaiCard: Story = {
  args: {
    issuer: '현대카드',
  },
};

export const WooriCard: Story = {
  args: {
    issuer: '우리카드',
  },
};

export const LotteCard: Story = {
  args: {
    issuer: '롯데카드',
  },
};

export const HanaCard: Story = {
  args: {
    issuer: '하나카드',
  },
};

export const KBCard: Story = {
  args: {
    issuer: '국민카드',
  },
};
