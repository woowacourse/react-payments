import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import App from '../App';

const meta = {
  title: 'App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <App />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'React Payments',
    });
    expect(heading).toBeInTheDocument();
  },
};
