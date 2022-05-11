import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddCardForm from '../components/AddCardForm';

export default {
  title: 'AddCardForm',
  component: AddCardForm,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <AddCardForm {...args} />;

export const CardForm = Template.bind({});

CardForm.args = {};
