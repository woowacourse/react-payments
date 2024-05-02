import { Meta, StoryObj } from '@storybook/react';
import ExpirationDateInput from '../components/InputComponent/ExpirationDateInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof ExpirationDateInput>;

const Template: StoryObj<typeof ExpirationDateInput> = {
  args: {
    expirationDate: {
      month: { value: '', errorMessage: '', isError: false },
      year: { value: '', errorMessage: '', isError: false },
    },
    handleInput: action('Updated Expiration Date'),
    handleShowComponent: action('Show Next Component'),
  },
};

export const Default = Template;

export const WithError = {
  args: {
    ...Template.args,
    expirationDate: {
      month: {
        value: '13',
        errorMessage: '에러다',
        isError: true,
      },
      year: { value: '', errorMessage: '', isError: false },
    },
  },
};

export const CorrectInput = {
  args: {
    ...Template.args,
    expirationDate: {
      month: { value: '12', errorMessage: '', isError: false },
      year: { value: '23', errorMessage: '', isError: false },
    },
  },
};

export const PartiallyFilled = {
  args: {
    ...Template.args,
    expirationDate: {
      month: { value: '07', errorMessage: '', isError: false },
      year: { value: '', errorMessage: '', isError: false },
    },
  },
};
