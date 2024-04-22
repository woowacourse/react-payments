import { Meta, StoryObj } from '@storybook/react';
import CardNumbersInputField from './CardNumbersInputField';

const meta: Meta = {
  title: 'form/CardNumbersInputField',
  component: CardNumbersInputField,
};

export default meta;

type InputProps = {
  value: string;
  isError: boolean;
};

export const Default: StoryObj<InputProps> = (args: any) => (
  <CardNumbersInputField cardNumbers={['1234', '2345', '3456', '4567']} setCardNumbers={() => {}} />
);

Default.args = {};

// export const ErrorInput: StoryObj<InputProps> = (args: any) => <CardExpirationDateInputField {...args} />;

// ErrorInput.args = {
//   value: '이건 에러',
//   isError: true,
// };
