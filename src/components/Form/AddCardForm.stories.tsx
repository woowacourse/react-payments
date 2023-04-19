import { StoryFn } from '@storybook/react';
import AddCardForm from './AddCardForm';

export default {
  title: 'AddCardForm',
  component: AddCardForm,
};

const Template: StoryFn<{}> = (args: {}) => <AddCardForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
