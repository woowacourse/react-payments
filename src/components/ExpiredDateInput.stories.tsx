import { StoryFn } from '@storybook/react';
import ExpiredDateInput from './ExpiredDateInput';

export default {
  title: 'ExpiredDateInput',
  component: ExpiredDateInput,
};

const Template: StoryFn<{}> = (args: {}) => <ExpiredDateInput {...args} />;

export const CardNumbersInput = Template.bind({});
CardNumbersInput.args = {
  type: 'text',
  maxLength: 2,
};
