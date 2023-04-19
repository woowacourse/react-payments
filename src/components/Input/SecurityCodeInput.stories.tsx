import { StoryFn } from '@storybook/react';
import { SecurityCodeInput } from './SecurityCodeInput';

export default {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

const Template: StoryFn<{}> = (args: {}) => <SecurityCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
