import { StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const CardNumbersInput = Template.bind({});
CardNumbersInput.args = {
  type: 'text',
  maxLength: 4,
};

export const HiddenInput = Template.bind({});
HiddenInput.args = {
  type: 'password',
};

export const ColoredInput = Template.bind({});
ColoredInput.args = {
  type: 'text',
  backgroundColor: 'blue',
};
