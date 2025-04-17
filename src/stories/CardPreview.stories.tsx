import type { Meta, StoryObj } from '@storybook/react';
import Input from '../Input';
import CardPreview from '../CardPreview';

const meta: Meta<typeof CardPreview> = {
  component: CardPreview,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumberInputValue: {
      cardNumberPart1: '',
      cardNumberPart2: '',
      cardNumberPart3: '',
      cardNumberPart4: '',
    },
    expirationDateInputValue: {
      expirationDatePart1: '',
      expirationDatePart2: '',
    },
    cardType: null,
  },
  render: function Render(args) {
    return <CardPreview {...args} />;
  },
};
