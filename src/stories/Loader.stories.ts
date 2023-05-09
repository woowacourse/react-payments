import { StoryObj } from '@storybook/react';
import CardLoader from '../components/CardLoader';

const meta = {
  title: 'CardLoader',
  component: CardLoader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  args: {},
};
