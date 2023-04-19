import { StoryFn } from '@storybook/react';
import ExpirationDateInput from './ExpirationDateInput';

export default {
  title: 'ExpirationDateInput',
  component: ExpirationDateInput,
};

const Template: StoryFn<{}> = (args: {}) => <ExpirationDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
