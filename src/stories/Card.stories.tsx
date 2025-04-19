import { Meta, StoryObj } from '@storybook/react';
import Card from '../component/card/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    cardNumber: {
      first: null,
      second: null,
      third: null,
      fourth: null,
      MM: null,
      YY: null,
      CVC: null,
    },
    cardType: 'default',
  },
  argTypes: {
    cardType: {
      control: 'select',
      options: ['default', 'visa', 'mastercard'],
      description: '카드 브랜드 유형',
    },
    cardNumber: {
      control: 'object',
      description: '카드 정보 객체',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const EmptyCard: Story = {
  args: {
    cardNumber: {
      first: null,
      second: null,
      third: null,
      fourth: null,
      MM: null,
      YY: null,
      CVC: null,
    },
    cardType: 'default',
  },
};

export const VisaCard: Story = {
  args: {
    cardType: 'visa',
  },
};

export const MastercardCard: Story = {
  args: {
    cardType: 'mastercard',
  },
};

export const FilledCardInfo: Story = {
  args: {
    cardNumber: {
      first: 1111,
      second: 2222,
      third: 3333,
      fourth: 4444,
      MM: 12,
      YY: 25,
      CVC: 123,
    },
    cardType: 'visa',
  },
};
