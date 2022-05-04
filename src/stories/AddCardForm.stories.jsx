import React from 'react';
import AddCardForm from '../components/AddCardForm';

export default {
  title: 'AddCardForm',
  component: AddCardForm,
};

const Template = (args) => <AddCardForm {...args} />;

export const CardForm = Template.bind({});

CardForm.args = {
  card: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  },
  updateCard: () => {},
  addCard: () => {},
};
