import type { Meta, StoryObj } from '@storybook/react-vite';

import CardBrandLogo from '../../../../../feature/CardRegister/components/CardPreviewSection/CardBrandLogo';

const meta = {
  title: 'feature/CardRegister/components/CardBrandLogo',
  component: CardBrandLogo,
  tags: ['autodocs'],
  args: {
    brandName: null,
  },
} satisfies Meta<typeof CardBrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visa: Story = {
  args: {
    brandName: 'visa',
  },
};

export const MasterCard: Story = {
  args: {
    brandName: 'masterCard',
  },
};

export const Amex: Story = {
  args: {
    brandName: 'amex',
  },
};

export const Diners: Story = {
  args: {
    brandName: 'diners',
  },
};

export const UnionPay: Story = {
  args: {
    brandName: 'unionPay',
  },
};

export const Hidden: Story = {
  args: {
    brandName: null,
  },
};
