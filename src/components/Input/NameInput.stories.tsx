import { StoryFn } from '@storybook/react';
import { NameInput, NameInputProps } from './NameInput';

export default {
  title: 'NameInput',
  component: NameInput,
};

const Template: StoryFn<NameInputProps> = (args) => <NameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
