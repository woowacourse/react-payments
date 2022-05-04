import React from 'react';

import CardForm from './CardForm';

export default {
  title: 'Example/CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const Primary = Template.bind({});
