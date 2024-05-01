import type { Meta, StoryObj } from '@storybook/react';
import CardBackImage from '../components/CardBackImage';

const meta = {
  title: 'CardBackImage',
  component: CardBackImage,
} satisfies Meta<typeof CardBackImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCvc: '123',
  },
};
