import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardLoading from '../components/CardLoadingComponents/CardLoading';

const meta = {
  title: 'Payment/CardLoadingComponents/CardLoading',
  component: CardLoading,
  tags: ['autodocs'],
} satisfies Meta<typeof CardLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onOpen: action('onOpen'),
  },
};
