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

export const Default: StoryObj<InputProps> = () => (
  <CardNumbersInputField
    cardNumbers={['1234', '2345', '3456', '4567']}
    handleCardNumbers={() => () => {}}
    errorMessages={['', '', '', '']}
  />
);

Default.args = {};
