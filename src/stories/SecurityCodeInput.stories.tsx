import { useState } from 'react';
import { Story } from '@storybook/react';
import SecurityCodeInput from '../components/cardForm/SecurityCodeInput';
import type { Card, InputProps } from '../types/Card';

export default {
  title: 'Payment/cardForm/SecurityCodeInput',
  component: SecurityCodeInput,
  tags: ['autodocs'],
};

type SecurityCodeInputProps = InputProps<Card['securityCode']>;

const Template: Story<SecurityCodeInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <SecurityCodeInput {...args} value={value} setValue={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  errorMessage: '',
  setErrorMessage: () => {},
};

export const FormatError = Template.bind({});
FormatError.args = {
  value: ' ',
  errorMessage: '숫자만 입력해주세요',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: '123',
  errorMessage: '',
  setErrorMessage: () => {},
};
