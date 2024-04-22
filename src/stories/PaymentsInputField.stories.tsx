import type { Meta, StoryObj } from '@storybook/react';
import PaymentsInputField from '../components/common/PaymentsInputField/PaymentsInputField';

const meta = {
  title: 'PaymentsInputField',
  component: PaymentsInputField,
} satisfies Meta<typeof PaymentsInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '1234',
    maxLength: 4,
    hasError: false,
  },
};

export const OnWidth: Story = {
  args: {
    placeholder: '1234',
    maxLength: 4,
    hasError: false,
    width: 200,
  },
};

export const OnError: Story = {
  args: {
    placeholder: '1234',
    maxLength: 4,
    hasError: true,
    width: 200,
  },
};
