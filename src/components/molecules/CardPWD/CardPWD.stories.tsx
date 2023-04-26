import type { Meta, StoryObj } from '@storybook/react';

import CardPWD from '.';

const meta: Meta<typeof CardPWD> = {
  title: 'molecules/CardPWD',
  component: CardPWD,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
