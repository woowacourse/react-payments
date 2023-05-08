import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';

function HomepageStories() {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

const meta: Meta<typeof HomepageStories> = {
  component: HomepageStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof HomepageStories>;

export const Home: Story = {
  args: {},
};
