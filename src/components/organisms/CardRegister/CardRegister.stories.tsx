import type { Meta, StoryObj } from '@storybook/react';

import CardRegister from '.';

const meta: Meta<typeof CardRegister> = {
  title: 'organisms/CardRegister',
  component: CardRegister,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
