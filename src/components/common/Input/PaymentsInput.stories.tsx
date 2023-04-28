import { StoryFn } from '@storybook/react';
import { PaymentsInput, InputProps } from './PaymentsInput';

export default {
  tags: ['autodocs'],
  title: 'PaymentsInput',
  component: PaymentsInput,
};

const Template: StoryFn<InputProps> = (args: InputProps) => <PaymentsInput {...args} />;

export const ColoredInput = Template.bind({});
ColoredInput.args = {
  backgroundColor: 'skyblue',
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

export const hundredPixelInput = Template.bind({});
hundredPixelInput.args = {
  width: '100px',
};
