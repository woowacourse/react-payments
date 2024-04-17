import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumber: ['2222', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};

export const VisaCard: Story = {
  args: {
    cardNumber: ['4444', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};

export const MasterCard: Story = {
  args: {
    cardNumber: ['5555', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};
