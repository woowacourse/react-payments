import { StoryFn } from '@storybook/react';
import { NameInput } from './NameInput';

export default {
  title: 'NameInput',
  component: NameInput,
};

const Template: StoryFn<{}> = (args: {}) => <NameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
