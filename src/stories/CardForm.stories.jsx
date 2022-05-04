import React from 'react';

import CardForm from '../components/common/CardForm';
import initialCardSchema from '../schema/cardSchema';

export default {
  title: 'CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const DefaultCardForm = Template.bind({});
DefaultCardForm.args = {
  cardFormSchema: initialCardSchema,
};
