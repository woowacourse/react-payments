import CardDisplay from '@/components/CardDisplay/CardDisplay';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CardDisplay',
  component: CardDisplay,
} satisfies Meta<typeof CardDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: {
      firstNumber: '1234',
      secondNumber: '1234',
      thirdNumber: '1234',
      fourthNumber: '1234',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardCompany: '',
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: {
      firstNumber: '4444',
      secondNumber: '1234',
      thirdNumber: '1234',
      fourthNumber: '1234',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardCompany: '',
  },
};

export const Master: Story = {
  args: {
    cardNumbers: {
      firstNumber: '5555',
      secondNumber: '1234',
      thirdNumber: '1234',
      fourthNumber: '1234',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardCompany: '',
  },
};

export const KaKaoBack: Story = {
  args: {
    cardNumbers: {
      firstNumber: '1234',
      secondNumber: '1234',
      thirdNumber: '1234',
      fourthNumber: '1234',
    },
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    cardCompany: '카카오뱅크',
  },
};
