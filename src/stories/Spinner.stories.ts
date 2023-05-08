import { StoryObj } from '@storybook/react';
import CardSpinner from '../components/CardSpinner';

const meta = {
  title: 'CardSpinner',
  component: CardSpinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
  },
};