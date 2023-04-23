import type { Meta, StoryObj } from '@storybook/react';

import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  title: 'molecules/CardItem',
  component: CardItem,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
