import { Meta, StoryObj } from '@storybook/react';
import CardNumberSection from './CardNumberSection';

const meta = {
  title: 'CardNumberSection',
  component: CardNumberSection,
} satisfies Meta<typeof CardNumberSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: { first: '12', second: '23', third: '34', fourth: '45' },
    changeCardNumber: () => alert('변경'),
    viewNextInput: () => alert('변경'),
    getErrorMessage: (field, value) => {
      if (value === '') return 'NO_ERROR';
      switch (field) {
        case 'cardNumber':
          if (value.length < 2) return '2자리만 입력 가능합니다.';
          if (!/^\d+$/.test(value)) return '숫자만 입력 가능합니다.';
          break;
        default:
          break;
      }
      return 'NO_ERROR';
    },
    isInvalid: (field, value) => {
      return field === 'cardNumber' && (value.length < 2 || !/^\d+$/.test(value));
    },
  },
};
