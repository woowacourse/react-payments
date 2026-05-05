import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
  title: 'Components/CardPreview',
  component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

// 기본 상태
export const Master: Story = {
  args: {
    cardNumber: ['5234', '5678', '1234', '5678'],
    expirationDate: { month: '12', year: '30' },
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4234', '5678', '1234', '5678'],
    expirationDate: { month: '12', year: '30' },
  },
};

// 빈 카드 상태 
export const Empty: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
  },
};