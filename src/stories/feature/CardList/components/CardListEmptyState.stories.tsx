import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import CardListEmptyState from '../../../../feature/CardList/components/CardListEmptyState';

const meta = {
  title: 'feature/CardList/components/CardListEmptyState',
  component: CardListEmptyState,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/cards']}>
        <div style={{ width: '320px', minHeight: '360px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardListEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
