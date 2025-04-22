import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
  title: 'components/CardPreview',
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

export const Visa: Story = {
  args: {
    cardNumberInputValue: {
      cardNumberPart1: '4567',
      cardNumberPart2: '4567',
      cardNumberPart3: '4567',
      cardNumberPart4: '4567',
    },
    expirationDateInputValue: {
      expirationDatePart1: '02',
      expirationDatePart2: '25',
    },
    cardType: 'visa',
  },
  render: function Render(args) {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardNumberInputValue: {
      cardNumberPart1: '5123',
      cardNumberPart2: '5123',
      cardNumberPart3: '5123',
      cardNumberPart4: '5123',
    },
    expirationDateInputValue: {
      expirationDatePart1: '02',
      expirationDatePart2: '25',
    },
    cardType: 'master',
  },
  render: function Render(args) {
    return <CardPreview {...args} />;
  },
};
