import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import type { CardInputProps } from '../../types/CardInputTypes';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

const renderBrandCard = (cardType: 'default' | 'visa' | 'mastercard') => {
  const cardInput: CardInputProps = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    password: '',
    cardBrand: '',
  };
  return <Card cardInput={cardInput} cardType={cardType} />;
};

export const Default: Story = {
  render: () => renderBrandCard('default'),
};

export const Visa: Story = {
  render: () => renderBrandCard('visa'),
};

export const Mastercard: Story = {
  render: () => renderBrandCard('mastercard'),
};

export const InputTwoCardNumber: Story = {
  args: {
    cardInput: {
      first: '1111',
      second: '2222',
      third: '',
      fourth: '',
      MM: '',
      YY: '',
      CVC: '',
      password: '',
      cardBrand: '',
    },
  },
  render: (args) => <Card cardInput={args.cardInput} cardType="default" />,
};

export const InputFourCardNumber: Story = {
  args: {
    cardInput: {
      first: '1111',
      second: '2222',
      third: '3333',
      fourth: '4444',
      MM: '',
      YY: '',
      CVC: '',
      password: '',
      cardBrand: '',
    },
  },
  render: (args) => <Card cardInput={args.cardInput} cardType="default" />,
};

export const InputExpiration: Story = {
  args: {
    cardInput: {
      first: '1111',
      second: '2222',
      third: '3333',
      fourth: '4444',
      MM: '12',
      YY: '25',
      CVC: '',
      password: '',
      cardBrand: '',
    },
  },
  render: (args) => <Card cardInput={args.cardInput} cardType="default" />,
};

export const SelectCardBrand: Story = {
  args: {
    cardInput: {
      first: '1111',
      second: '2222',
      third: '3333',
      fourth: '4444',
      MM: '12',
      YY: '25',
      CVC: '',
      password: '',
      cardBrand: 'BC카드',
    },
  },
  render: (args) => <Card cardInput={args.cardInput} cardType="default" />,
};
