import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '04', year: '26' },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};
