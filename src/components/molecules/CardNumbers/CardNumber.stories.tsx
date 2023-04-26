import type { Meta, StoryObj } from '@storybook/react';

import CardNumbers from '.';

const meta: Meta<typeof CardNumbers> = {
  title: 'molecules/CardNumbers',
  component: CardNumbers,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
