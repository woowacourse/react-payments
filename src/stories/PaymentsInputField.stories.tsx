import type { Meta, StoryObj } from '@storybook/react';
import PaymentsInputField from '../components/PaymentsInputField';

const meta = {
  title: 'PaymentsInputField',
  component: PaymentsInputField,
} satisfies Meta<typeof PaymentsInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    inputType: 'number',
    placeholder: '1234',
    maxLength: 4,
    hasError: true,
  },
};

export const Month: Story = {
  args: {
    inputType: 'number',
    placeholder: 'MM',
    maxLength: 2,
    hasError: false,
  },
};

export const Year: Story = {
  args: {
    inputType: 'number',
    placeholder: 'YY',
    maxLength: 2,
    hasError: false,
  },
};

export const Name: Story = {
  args: {
    inputType: 'text',
    placeholder: 'FAMILY / GIVEN',
    maxLength: 50,
    hasError: false,
  },
};
