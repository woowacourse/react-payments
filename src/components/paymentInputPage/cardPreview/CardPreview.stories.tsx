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
    cardNumbers: ['1234', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '25' },
  },
};

export const VisaUI: Story = {
  args: {
    cardNumbers: ['4111', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '25' },
  },
};

export const MasterUI: Story = {
  args: {
    cardNumbers: ['5111', '1234', '1234', '1234'],
    expirationDate: { month: '12', year: '25' },
  },
};
