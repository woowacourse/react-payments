import { Meta, StoryObj } from '@storybook/react';
import CardExpirationDateInputField from './CardExpirationDateInputField';

const meta: Meta = {
  title: 'form/CardExpirationDateInputField',
  component: CardExpirationDateInputField,
};

export default meta;

type InputProps = {
  value: string;
  isError: boolean;
};

export const Default: StoryObj<InputProps> = (args: any) => (
  <CardExpirationDateInputField
    {...args}
    expirationDate={{ month: 12, year: 24 }}
    handleExpirationDateChange={() => {}}
    errorMessages={['', '']}
  />
);

Default.args = {};
