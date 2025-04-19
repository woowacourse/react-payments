import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';

const meta = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
