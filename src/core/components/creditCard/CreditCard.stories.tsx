import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { CreditCard } from './CreditCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/CreditCard',
  component: CreditCard,
} satisfies Meta<typeof CreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    bank: 'default',
    cardBrand: 'mastercard',
    cardNumberList: ['0000', '0000', '0000', '0000'],
    expirationDate: ['04', '28'],
  },
};
