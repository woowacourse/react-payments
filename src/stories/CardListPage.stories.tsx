import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CardListPage from '../pages/CardListPage';

const meta = {
  title: 'CardListPage',
  tags: ['autodocs'],
  component: CardListPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <CardListPage />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <CardListPage />;
  },
};
