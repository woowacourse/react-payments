import type { Meta, StoryObj } from '@storybook/react';
import CardView from '../components/Card';

const meta = {
  title: 'CardView',
  component: CardView,
} satisfies Meta<typeof CardView>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockCardInfo = {
  cardNumber1: '5123',
  cardNumber2: '1234',
  cardNumber3: '1212',
  cardNumber4: '2323',
  month: '1',
  year: '12',
  userName: 'HAILEY CHOI',
};

export const Default: Story = {
  args: {
    cardInfo: mockCardInfo,
  },
};
