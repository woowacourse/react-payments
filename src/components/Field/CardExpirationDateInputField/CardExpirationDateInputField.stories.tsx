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
  <CardExpirationDateInputField {...args} date={{ month: 12, year: 24 }} />
);

// export const ErrorInput: StoryObj<InputProps> = (args: any) => <CardExpirationDateInputField {...args} />;

// ErrorInput.args = {
//   value: '이건 에러',
//   isError: true,
// };
