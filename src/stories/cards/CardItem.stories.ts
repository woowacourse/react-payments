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
      cardNumber: ['1233', '1234', '1234', '1234'],
      expirationDate: {
        month: '06',
        year: '23',
      },
      ownerName: 'ASHLEY',
      securityCode: '111',
      password: ['1', '1'],
    },
  },
};
