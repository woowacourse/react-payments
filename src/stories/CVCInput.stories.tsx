import { Meta, StoryObj } from '@storybook/react';
import CVCInput from '../components/InputComponent/CVCInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CVCInput',
  component: CVCInput,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof CVCInput>;

const Template: StoryObj<typeof CVCInput> = {
  args: {
    CVC: {
      CVC: { value: '', errorMessage: '', isError: false },
    },
    handleInput: action('Updated CVC'),
    handleShowComponent: action('Show Next Component'),
  },
};

export const Default = Template;

export const WithError = {
  args: {
    ...Template.args,
    CVC: {
      CVC: {
        value: '12a',
        errorMessage: '에러',
        isError: true,
      },
    },
  },
};

export const CorrectInput = {
  args: {
    ...Template.args,
    CVC: {
      CVC: { value: '123', errorMessage: '', isError: false },
    },
  },
};

export const IncompleteInput = {
  args: {
    ...Template.args,
    CVC: {
      CVC: { value: '12', errorMessage: '', isError: false },
    },
  },
};
