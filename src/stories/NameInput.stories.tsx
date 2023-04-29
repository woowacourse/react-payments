import { useState } from 'react';
import { Story } from '@storybook/react';
import NameInput from '../components/cardForm/NameInput';
import type { CardItemInfo, InputProps } from '../types/Card';

export default {
  title: 'Payment/cardForm/NameInput',
  component: NameInput,
  tags: ['autodocs'],
};

type NameInputProps = InputProps<CardItemInfo['name']>;

const Template: Story<NameInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <NameInput {...args} value={value} setValue={handleChange} />;
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
  errorMessage: '영어만 입력해주세요',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: 'HAE ON',
  errorMessage: '',
  setErrorMessage: () => {},
};
