import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from '.';

export default {
  title: 'Page/AddCard/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
