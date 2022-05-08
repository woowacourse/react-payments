import React from 'react';

import CardForm from './CardForm';

export default {
  title: 'Component/CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const Default = Template.bind({});
