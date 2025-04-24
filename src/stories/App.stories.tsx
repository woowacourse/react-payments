import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../constants/setting';

const meta = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[ROUTER_PATH.MAIN]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
