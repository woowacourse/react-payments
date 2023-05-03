import { StoryFn } from '@storybook/react';
import AddCardForm, { AddCardFormProps } from './AddCardForm';

export default {
  title: 'Section/AddCardForm',
  component: AddCardForm,
};

const Template: StoryFn<AddCardFormProps> = (args) => <AddCardForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
