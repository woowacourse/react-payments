import { Meta, StoryObj } from '@storybook/react';
import UserNameInput from '../components/InputComponent/UserNameInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/UserNameInput',
  component: UserNameInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof UserNameInput>;

const Template: StoryObj<typeof UserNameInput> = {
  args: {
    userName: {
      userName: { value: '', errorMessage: '', isError: false },
    },
    handleInput: action('Updated UserName'),
    handleShowComponent: action('Show Next Component'),
  },
};

export const Default = Template;

export const WithError = {
  args: {
    ...Template.args,
    userName: {
      userName: {
        value: 'Johna',
        errorMessage: '에러다',
        isError: true,
      },
    },
  },
};

export const CorrectInput = {
  args: {
    ...Template.args,
    userName: {
      userName: { value: 'JAE MIN', errorMessage: '', isError: false },
    },
  },
};

export const PartiallyFilled = {
  args: {
    ...Template.args,
    userName: {
      userName: { value: 'J', errorMessage: '', isError: false },
    },
  },
};
