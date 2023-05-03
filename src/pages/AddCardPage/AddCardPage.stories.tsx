import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AddCardPage from './AddCardPage';

function AddCardPageStories() {
  return (
    <div className="app">
      <AddCardPage />
    </div>
  );
}

const meta: Meta<typeof AddCardPageStories> = {
  component: AddCardPageStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof AddCardPageStories>;

export const AddCard: Story = {
  args: {},
};
