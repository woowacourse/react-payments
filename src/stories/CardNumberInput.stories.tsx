import { Story } from '@storybook/react';
import CardNumberInput from '../components/cardForm/CardNumberInput';
import type { CardItemInfo, InputProps } from '../types/Card';

export default {
  title: 'Payment/CardNumberInput',
  component: CardNumberInput,
};

type CardNumberInputProps = InputProps<CardItemInfo['cardNumber']>;

const Template: Story<CardNumberInputProps> = (args) => (
  <CardNumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: ['', '', '', ''],
  setValue: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
};

export const Error = Template.bind({});
Error.args = {
  value: ['rm', '', '', ''],
  setValue: () => {},
  errorMessage: '카드 번호는 숫자로만 입력해주세요.',
  setErrorMessage: () => {},
};

export const FinishInput = Template.bind({});
FinishInput.args = {
  value: ['1234', '2234', '3455', '3456'],
  setValue: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
};
