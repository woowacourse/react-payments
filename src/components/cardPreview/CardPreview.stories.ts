import type { Meta, StoryObj } from '@storybook/react';
import CardPreview, { CardFrontPreviewProps } from './CardFrontPreview';

const meta: Meta<CardFrontPreviewProps> = {
  title: 'Components/CardPreview',
  component: CardPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '5678', '9012', '3456'],
      cardCompany: '카카오뱅크',
      cardExpiration: ['12', '23'],
      userName: 'John Doe',
      cvc: '123',
      password: '12',
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['5234', '5678', '9012', '3456'],
      cardCompany: 'BC카드',
      cardExpiration: ['12', '23'],
      userName: 'MasterCard User',
      cvc: '123',
      password: '12',
    },
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4532', '5678', '9012', '3456'],
      cardCompany: '신한카드',
      cardExpiration: ['12', '23'],
      userName: 'Visa User',
      cvc: '123',
      password: '12',
    },
  },
};
