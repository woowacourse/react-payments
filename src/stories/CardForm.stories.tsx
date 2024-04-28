import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CardForm } from '../components';

const meta: Meta = {
  title: 'Form',
  component: CardForm,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardFormDefault: Story = {
  args: {},
};

CardFormDefault.args = {};
