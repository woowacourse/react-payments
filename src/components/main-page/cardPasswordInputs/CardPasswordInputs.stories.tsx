import { Meta, StoryObj } from '@storybook/react';
import CardPasswordInputs from './CardPasswordInputs';

const meta = {
  title: 'CardPasswordInputs',
  component: CardPasswordInputs,
} satisfies Meta<typeof CardPasswordInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    password: '12',
    changePassword: () => alert('변경'),
    viewNextInput: () => alert('변경'),
    getErrorMessage: (field, value) => {
      if (value === '') return 'NO_ERROR';
      switch (field) {
        case 'password':
          if (value.length < 2) return '2자리만 입력 가능합니다.';
          if (!/^\d+$/.test(value)) return '숫자만 입력 가능합니다.';
          break;
        default:
          break;
      }
      return 'NO_ERROR';
    },
    isInvalid: (field, value) => {
      return field === 'password' && (value.length < 2 || !/^\d+$/.test(value));
    },
  },
};
