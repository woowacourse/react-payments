import type { Meta, StoryObj } from '@storybook/react';

import AddCard from '.';

const meta: Meta<typeof AddCard> = {
  title: 'pages/AddCard',
  component: AddCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
