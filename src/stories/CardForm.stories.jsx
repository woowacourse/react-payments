import React from 'react';

import CardForm from '../components/CardForm';

export default {
  title: 'CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const DefaultCardForm = Template.bind({});
