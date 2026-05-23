import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardListEmpty from './CardListEmpty';

const meta: Meta<typeof CardListEmpty> = {
  title: 'Components/CardListContainer/CardListEmpty',
  component: CardListEmpty,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardListEmpty>;

export const Default: Story = {};
