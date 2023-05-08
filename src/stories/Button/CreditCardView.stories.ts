import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardView } from '../../components/CreditCardView';

const meta = {
  title: 'Button/CreditCardView',
  component: CreditCardView,
  tags: ['autodocs'],
} satisfies Meta<typeof CreditCardView>;

type Story = StoryObj<typeof meta>;

export const AllfilledInfo: Story = {
  args: {
    name: '엽토',
    cardNumbers: '1212-3434-5656-7878',
    expirationDate: ['12', '24'],
    cardCompany: '카드사'
  },
};

export default meta;
