import type { Meta, StoryObj } from '@storybook/react';

import CardOwner from '.';

const meta: Meta<typeof CardOwner> = {
  title: 'molecules/CardOwner',
  component: CardOwner,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
