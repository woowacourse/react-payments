import { StoryFn } from '@storybook/react';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

const Template: StoryFn<PasswordInputProps> = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
