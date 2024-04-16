import type { Meta, StoryObj } from '@storybook/react';
import CardImage from '../components/CardImage';

const meta = {
  title: 'CardImage',
  component: CardImage,
} satisfies Meta<typeof CardImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
