import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/InputComponent/Input';
export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      defaultValue: 'text',
    },
    maxLength: {
      control: 'number',
      defaultValue: 20,
    },
    value: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Empty',
    },
    isError: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<typeof Input>;

const Template: StoryObj<typeof Input> = {
  args: {
    maxLength: 20,
    value: '',
    placeholder: '비었어',
    isError: false,
    onChange: () => {},
    onKeyDown: () => {},
  },
};

export const Default = Template;

export const WithError = {
  ...Template,
  args: {
    ...Template.args,
    isError: true,
    value: '틀렸어',
  },
};

export const Filled = {
  ...Template,
  args: {
    ...Template.args,
    value: '하하하하하!',
  },
};
