import type { Meta, StoryObj } from '@storybook/react';

import MyCard from '.';

const meta: Meta<typeof MyCard> = {
  title: 'pages/MyCard',
  component: MyCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: {},
  },
};
