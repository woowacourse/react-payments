import { StoryFn } from '@storybook/react';
import { SecurityCodeInput, SecurityInputProps } from './SecurityCodeInput';

export default {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

const Template: StoryFn<SecurityInputProps> = (args) => <SecurityCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
