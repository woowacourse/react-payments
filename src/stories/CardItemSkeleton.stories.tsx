import type { Meta, StoryObj } from '@storybook/react-vite';
import CardItemSkeleton from '../components/Cards/CardItemSkeleton';

const meta = {
  title: 'Cards/CardItemSkeleton',
  component: CardItemSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof CardItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
