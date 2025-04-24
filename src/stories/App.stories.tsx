import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
