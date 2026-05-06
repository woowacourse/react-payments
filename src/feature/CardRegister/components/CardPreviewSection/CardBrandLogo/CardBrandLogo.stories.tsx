import type {Meta, StoryObj} from '@storybook/react-vite';

import CardBrandLogo from './CardBrandLogo';

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
