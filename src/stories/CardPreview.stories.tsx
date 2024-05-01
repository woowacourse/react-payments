import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ['1134', '1234', '1234', '1234'],
    expirationDate: ['05', '30'],
    ownerName: ['KIM'],
    cardIssuer: ['카카오뱅크'],
    cvc: ['123'],
    password: ['12'],
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: ['4134', '1234', '1234', '1234'],
    expirationDate: ['05', '30'],
    ownerName: ['KIM'],
    cardIssuer: ['현대카드'],
    cvc: ['123'],
    password: ['12'],
  },
};

export const Master: Story = {
  args: {
    cardNumbers: ['5134', '1234', '1234', '1234'],
    expirationDate: ['05', '30'],
    ownerName: ['KIM'],
    cardIssuer: ['BC카드'],
    cvc: ['123'],
    password: ['12'],
  },
};
