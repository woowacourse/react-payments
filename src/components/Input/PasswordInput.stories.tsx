import { StoryFn } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

const Template: StoryFn<{}> = (args: {}) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
