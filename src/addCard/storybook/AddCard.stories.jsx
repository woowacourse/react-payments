import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddCard from '../components/AddCard';
import '../../css/index.css';
import '../../css/App.css';

export default {
  title: 'AddCard',
  component: AddCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = () => <AddCard />;

export const AddCardPage = Template.bind({});

AddCardPage.args = {};
