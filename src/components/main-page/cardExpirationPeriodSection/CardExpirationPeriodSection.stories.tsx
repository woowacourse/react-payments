import { Meta, StoryObj } from '@storybook/react';
import CardExpirationPeriodSection from './CardExpirationPeriodSection';

const meta = {
  title: 'CardExpirationPeriodSection',
  component: CardExpirationPeriodSection,
} satisfies Meta<typeof CardExpirationPeriodSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expirationPeriod: { month: '12', year: '23' },
    changeExpirationPeriod: () => alert('변경'),
    viewNextInput: () => alert('변경'),
    getErrorMessage: (field: string, value: string) => {
      if (value === '') return 'NO_ERROR';
      switch (field) {
        case 'expirationPeriod':
          if (value.length < 2) return '2자리만 입력 가능합니다.';
          if (!/^\d+$/.test(value)) return '숫자만 입력 가능합니다.';
          break;
        default:
          break;
      }
      return 'NO_ERROR';
    },
    isInvalid: (field: string, value: string) => {
      return field === 'expirationPeriod' && (value.length < 2 || !/^\d+$/.test(value));
    },
  },
};
