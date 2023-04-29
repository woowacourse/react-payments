import { useState } from 'react';
import { Story } from '@storybook/react';
import ExpirationDateInput from '../components/cardForm/ExpirationDateInput';
import type { CardItemInfo, InputProps } from '../types/Card';

export default {
  title: 'Payment/cardForm/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
};

type ExpirationDateInputProps = InputProps<CardItemInfo['expirationDate']>;

const Template: Story<ExpirationDateInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
  };

  return (
    <ExpirationDateInput {...args} value={value} setValue={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: ['', ''],
  errorMessage: '',
  setErrorMessage: () => {},
};

export const FormatError = Template.bind({});
FormatError.args = {
  value: ['3', ''],
  errorMessage: '만료일은 MM/YY 형식으로 입력해주세요',
  setErrorMessage: () => {},
};

export const ValidMonthError = Template.bind({});
ValidMonthError.args = {
  value: ['34', '34'],
  errorMessage: '유효한 달을 입력해주세요',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: ['04', '34'],
  errorMessage: '',
  setErrorMessage: () => {},
};
