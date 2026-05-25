import type { Meta, StoryObj } from '@storybook/react-vite';
import CardsSkeletonTemplate from '../components/Cards/CardsSkeletonTemplate';

const meta = {
  title: 'Cards/CardsSkeletonTemplate',
  component: CardsSkeletonTemplate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardsSkeletonTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
