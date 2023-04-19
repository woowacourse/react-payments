import type { Meta, StoryObj } from '@storybook/react';

import CardRegister from '../components/CardRegister';

const meta: Meta<typeof CardRegister> = {
  title: 'CardRegister',
  component: CardRegister,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
