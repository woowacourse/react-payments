import { Meta, StoryObj } from '@storybook/react';
import CardSkeleton from '../components/CardLoadingComponents/CardSkeleton';

const meta = {
  title: 'Payment/CardLoadingComponents/CardSkeleton',
  component: CardSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
