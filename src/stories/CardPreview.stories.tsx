import { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  argTypes: {
    cardNumbers: {
      description: '• Visa: 4로 시작하는 16자리 숫자 <br /> • MasterCard: 51~55로 시작하는 16자리 숫자',
      options: {
        default: {
          first: '1234',
          second: '1234',
          third: '1234',
          fourth: '1234',
        },
        'visa card (4로 시작)': {
          first: '4444',
          second: '4444',
          third: '4444',
          fourth: '4444',
        },
        'master card (51~55로 시작)': {
          first: '5555',
          second: '5555',
          third: '5555',
          fourth: '5555',
        },
      },
      control: { type: 'select' },
    },

    expiryDate: {
      options: {
        '2024년 4월': {
          month: '04',
          year: '24',
        },
        '2025년 11월': {
          month: '11',
          year: '25',
        },
        '2040년 12월': {
          month: '12',
          year: '40',
        },
      },
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumbers: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    expiryDate: {
      month: '11',
      year: '25',
    },
    cardholderName: 'John Doe',
  },
};
