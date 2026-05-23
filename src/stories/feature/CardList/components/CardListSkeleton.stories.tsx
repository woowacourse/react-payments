import type { Meta, StoryObj } from '@storybook/react-vite';

import CardListSkeleton from '../../../../feature/CardList/components/CardListSkeleton';

const meta = {
  title: 'feature/CardList/components/CardListSkeleton',
  component: CardListSkeleton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
