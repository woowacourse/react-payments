import type { Meta, StoryObj } from '@storybook/react';
import CardItem from '../../components/CardItem/CardItem';

const meta = {
  title: 'Payments/Cards/CardItem',
  component: CardItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    information: {
      cardNumber: '1234123412341234',
      expirationDate: {
        month: '06',
        year: '23',
      },
      ownerName: 'ASHLEY',
    },
  },
};
