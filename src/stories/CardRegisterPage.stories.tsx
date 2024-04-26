import type { Meta, StoryObj } from '@storybook/react';
import CardRegisterPage from '../pages/cardRegisterPage/CardRegisterPage';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'CardRegisterPage',
  component: CardRegisterPage,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
