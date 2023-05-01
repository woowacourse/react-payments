import { useState } from 'react';
import { Story } from '@storybook/react';
import PasswordInput from '../components/cardForm/PasswordInput';
import type { Card, InputProps } from '../types/Card';

export default {
  title: 'Payment/cardForm/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
};

type PasswordInputProps = InputProps<Card['password']>;

const Template: Story<PasswordInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
  };

  return <PasswordInput {...args} value={value} setValue={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: ['', ''],
  errorMessage: '',
  setErrorMessage: () => {},
};

export const Error = Template.bind({});
Error.args = {
  value: [' ', ''],
  errorMessage: '숫자만 입력해주세요',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: ['1', '2'],
  errorMessage: '',
  setErrorMessage: () => {},
};
