import type { Meta, StoryObj } from '@storybook/react';
import PreviewCard from './PreviewCard';

const meta: Meta<typeof PreviewCard> = {
  title: 'Components/PreviewCard',
  component: PreviewCard,
  tags: ['autodocs'],
  argTypes: {
    cardNumber: {
      control: 'object',
      description: '카드 번호',
    },
    expirationDate: {
      control: 'object',
      description: '유효 기간',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PreviewCard>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: ['12', '25'],
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4134', '1234', '1234', '1234'],
    expirationDate: ['12', '25'],
  },
};

export const MasterCard: Story = {
  args: {
    cardNumber: ['5134', '1234', '1234', '1234'],
    expirationDate: ['12', '25'],
  },
};
