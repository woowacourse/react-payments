import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from '../components/cardForm/CardNumberInput';

const meta = {
  title: 'Payment/cardForm/CardNumberInput',
  component: CardNumberInput,
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
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ['', '', '', ''],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};

export const Error: Story = {
  args: {
    value: ['rm', '', '', ''],
    errorMessage: '카드 번호는 숫자로만 입력해주세요.',
    setErrorMessage: () => {},
  },
};

export const FinishInput: Story = {
  args: {
    value: ['1234', '2234', '3455', '3456'],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};
