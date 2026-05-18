import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardItem } from './CardItem';

const meta: Meta<typeof CardItem> = {
  title: 'Components/CardListPage/CardItem',
  component: CardItem,
};

export default meta;

type Story = StoryObj<typeof CardItem>;

export const BC: Story = {
  render: () => (
    <CardItem
      card={{
        id: '1',
        cardNumber: '5511 **** **** 9012',
        cardBrand: 'BC',
        expireDate: '12/28',
        cvc: '',
        cardPassword: '',
      }}
    />
  ),
};

export const Shinhan: Story = {
  render: () => (
    <CardItem
      card={{
        id: '2',
        cardNumber: '4111 **** **** 1111',
        cardBrand: 'SHINHAN',
        expireDate: '06/30',
        cvc: '',
        cardPassword: '',
      }}
    />
  ),
};

export const Kakao: Story = {
  render: () => (
    <CardItem
      card={{
        id: '3',
        cardNumber: '5234 **** **** 7890',
        cardBrand: 'KAKAO',
        expireDate: '09/27',
        cvc: '',
        cardPassword: '',
      }}
    />
  ),
};
