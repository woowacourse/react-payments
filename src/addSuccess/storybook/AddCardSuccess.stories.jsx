import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddCardSuccess from '../components/AddCardSuccess';

export default {
  title: 'AddCardSuccess',
  component: AddCardSuccess,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    addCard: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <AddCardSuccess {...args} />;

export const CardForm = Template.bind({});

CardForm.args = {
  addCard: () => {},
};
