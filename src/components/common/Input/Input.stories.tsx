import { StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const ColoredInput = Template.bind({});
ColoredInput.args = {
  backgroundColor: 'blue',
};

export const leftAlignedInput = Template.bind({});
leftAlignedInput.args = {
  align: 'left',
};

export const centerAlignedInput = Template.bind({});
centerAlignedInput.args = {
  align: 'center',
};

export const rightAlignedInput = Template.bind({});
rightAlignedInput.args = {
  align: 'right',
};
