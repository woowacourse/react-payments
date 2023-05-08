import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardLoadingSpinner from '../components/CardLoadingComponents/CardLoadingSpinner';

const meta = {
  title: 'Payment/CardLoadingComponents/CardLoadingSpinner',
  component: CardLoadingSpinner,
  tags: ['autodocs'],
} satisfies Meta<typeof CardLoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onOpen: action('onOpen'),
  },
};
