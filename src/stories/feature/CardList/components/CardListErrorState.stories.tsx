import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import CardListErrorState from '../../../../feature/CardList/components/CardListErrorState';

const meta = {
  title: 'feature/CardList/components/CardListErrorState',
  component: CardListErrorState,
  tags: ['autodocs'],
  args: {
    handleRetryFetchCards: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px', minHeight: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardListErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
