import { useState } from 'react';
import { Story } from '@storybook/react';
import CardNumberInput from '../components/cardForm/CardNumberInput';
import type { CardItemInfo, InputProps } from '../types/Card';

export default {
  title: 'Payment/CardNumberInput',
  component: CardNumberInput,
};

type CardNumberInputProps = InputProps<CardItemInfo['cardNumber']>;

const Template: Story<CardNumberInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
  };

  return <CardNumberInput {...args} value={value} setValue={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: ['', '', '', ''],
  errorMessage: '',
  setErrorMessage: () => {},
};

export const Error = Template.bind({});
Error.args = {
  value: ['rm', '', '', ''],
  errorMessage: '카드 번호는 숫자로만 입력해주세요.',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: ['1234', '2234', '3455', '3456'],
  errorMessage: '',
  setErrorMessage: () => {},
};
