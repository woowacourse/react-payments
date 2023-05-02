import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '../components/cardForm/PasswordInput';

const meta = {
  title: 'Payment/cardForm/PasswordInput',
  component: PasswordInput,
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
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ['', ''],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};

export const Error: Story = {
  args: {
    value: [' ', ''],
    errorMessage: '숫자만 입력해주세요',
    setErrorMessage: () => {},
  },
};

export const FinishInput: Story = {
  args: {
    value: ['1', '2'],
    errorMessage: '',
    setErrorMessage: () => {},
  },
};
