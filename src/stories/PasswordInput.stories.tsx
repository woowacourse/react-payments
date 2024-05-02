import { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '../components/InputComponent/PasswordInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof PasswordInput>;

const Template: StoryObj<typeof PasswordInput> = {
  args: {
    password: {
      password: { value: '', errorMessage: '', isError: false },
    },
    handleInput: action('Updated Password'),
    handleShowComponent: action('Show Next Component'),
  },
};

export const Default = Template;

export const WithError = {
  args: {
    ...Template.args,
    password: {
      password: {
        value: 'a',
        errorMessage: '에러다',
        isError: true,
      },
    },
  },
};

export const CorrectInput = {
  args: {
    ...Template.args,
    password: {
      password: { value: '12', errorMessage: '', isError: false },
    },
  },
};

export const IncompleteInput = {
  args: {
    ...Template.args,
    password: {
      password: { value: '1', errorMessage: '', isError: false },
    },
  },
};
