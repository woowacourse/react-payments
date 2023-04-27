import { StoryFn } from '@storybook/react';
import { OwnerNameInput, OwnerNameInputProps } from './OwnerNameInput';

export default {
  title: 'OwnerNameInput',
  component: OwnerNameInput,
};

const Template: StoryFn<OwnerNameInputProps> = (args) => <OwnerNameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
