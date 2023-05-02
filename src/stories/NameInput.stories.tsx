import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NameInput from '../components/cardForm/NameInput';

const meta = {
  title: 'Payment/cardForm/NameInput',
  component: NameInput,
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
} satisfies Meta<typeof NameInput>;

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
    errorMessage: '영어만 입력해주세요',
    setErrorMessage: () => {},
  },
};

export const FinishInput: Story = {
  args: {
    value: 'HAE ON',
    errorMessage: '',
    setErrorMessage: () => {},
  },
};
