import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SecurityCodeInput from '../components/cardForm/SecurityCodeInput';

const meta = {
  title: 'Payment/cardForm/SecurityCodeInput',
  component: SecurityCodeInput,
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
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    errorMessage: '',
    setErrorMessage: () => {},
  },
};

export const FormatError: Story = {
  args: {
    value: ' ',
    errorMessage: '숫자만 입력해주세요',
    setErrorMessage: () => {},
  },
};

export const FinishInput: Story = {
  args: {
    value: '123',
    errorMessage: '',
    setErrorMessage: () => {},
  },
};
