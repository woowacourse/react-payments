import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ExpirationDateInput from '../components/cardForm/ExpirationDateInput';

const meta = {
  title: 'Payment/cardForm/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [value, setValue] = useState(['', '', '', '']);
      const handleChange = (newValue: string[]) => {
        setValue(newValue);
      };
      return <Story value={value} setValue={handleChange} />;
    },
  ],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ['', ''],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};

export const FormatError: Story = {
  args: {
    value: ['3', ''],
    errorMessage: '만료일은 MM/YY 형식으로 입력해주세요',
    setErrorMessage: () => {},
  },
};

export const ValidMonthError: Story = {
  args: {
    value: ['34', '34'],
    errorMessage: '유효한 달을 입력해주세요',
    setErrorMessage: () => {},
  },
};

export const FinishInput: Story = {
  args: {
    value: ['04', '34'],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};
