import type { Meta, StoryObj } from '@storybook/react-vite';

import { CardPreview } from './CardPreview';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/CreditCard',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    cardBrand: 'mastercard',
    cardNumbers: { first: '0000', second: '0000', third: '0000', fourth: '0000' },
    expirationDate: { month: '04', year: '28' },
  },
};
