import type { Meta, StoryObj } from '@storybook/react';
import PaymentsInputForm from '../components/PaymentsInputForm';

const meta = {
  title: 'PaymentsInputForm',
  component: PaymentsInputForm,
} satisfies Meta<typeof PaymentsInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    label: '카드 번호',
    hasError: false,
    errorMessage: 'ddd',
    inputFieldProps: [
      {
        placeholder: '1234',
        maxLength: 4,
        hasError: true,
      },
      {
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
      {
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
      {
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
    ],
  },
};

export const ExpirationDate: Story = {
  args: {
    label: '유효기간',

    hasError: false,
    errorMessage: 'ddddd',
    inputFieldProps: [
      {
        placeholder: 'MM',
        maxLength: 2,
        hasError: false,
      },
      {
        placeholder: 'YY',
        maxLength: 2,
        hasError: false,
      },
    ],
  },
};

export const Name: Story = {
  args: {
    label: '소유자 이름',
    hasError: false,
    errorMessage: '',
    inputFieldProps: [
      {
        placeholder: 'FAMILY / GIVEN',
        maxLength: 50,
        hasError: false,
      },
    ],
  },
};
