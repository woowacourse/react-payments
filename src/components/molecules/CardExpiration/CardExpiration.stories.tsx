import type { Meta, StoryObj } from '@storybook/react';

import CardExpiration from '.';

const meta: Meta<typeof CardExpiration> = {
  title: 'molecules/CardExpiration',
  component: CardExpiration,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
