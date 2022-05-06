import React from 'react';
import AddCardForm from '../components/AddCardForm';
import { getCard } from '../util';

export default {
  title: 'AddCardForm',
  component: AddCardForm,
};

const Template = (args) => <AddCardForm {...args} />;

export const CardForm = Template.bind({});

CardForm.args = {
  card: getCard(),
  updateCard: () => {},
  addCard: () => {},
};
