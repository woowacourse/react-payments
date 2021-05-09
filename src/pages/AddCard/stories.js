import React from 'react';
import { MemoryRouter } from 'react-router';
import AddCard from '.';

export default {
  title: 'Page/AddCard',
  component: AddCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <AddCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
