import { Meta, StoryObj } from '@storybook/react';
import CardCVCNumberSection from './CardCVCNumberSection';

const meta = {
  title: 'CardCVCNumberSection',
  component: CardCVCNumberSection,
} satisfies Meta<typeof CardCVCNumberSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    CVCNumber: '123',
    changeCVCNumber: () => alert('변경'),
    viewNextInput: () => alert('변경'),
    getErrorMessage: (field, value) => {
      if (value === '') return 'NO_ERROR';
      switch (field) {
        case 'CVC':
          if (value.length < 3) return '3자리만 입력 가능합니다.';
          if (!/^\d+$/.test(value)) return '숫자만 입력 가능합니다.';
          break;
        default:
          break;
      }
      return 'NO_ERROR';
    },
    isInvalid: (field, value) => {
      return field === 'CVC' && (value.length < 3 || !/^\d+$/.test(value));
    },
  },
};
