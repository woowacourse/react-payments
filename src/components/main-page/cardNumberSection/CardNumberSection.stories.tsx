import { Meta, StoryObj } from '@storybook/react';
import CardNumberSection from './CardNumberSection';

const meta = {
  title: 'CardNumberSection',
  component: CardNumberSection,
} satisfies Meta<typeof CardNumberSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: { first: '12', second: '23', third: '34', fourth: '45' },
    changeCardNumber: () => alert('변경'),
    viewNextInput: () => alert('변경'),
  },
};
