import { StoryFn } from '@storybook/react';
import NameInput from './NameInput';

export default {
  title: 'NameInput',
  component: NameInput,
};

const Template: StoryFn<{}> = (args: {}) => <NameInput {...args} />;

export const CardNumbersInput = Template.bind({});
CardNumbersInput.args = {};
