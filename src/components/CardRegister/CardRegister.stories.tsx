import type { Meta, StoryObj } from '@storybook/react';
import CardRegister from './CardRegister';

const meta = {
  title: 'CardRegister',
  component: CardRegister,
  tags: ['autodocs'],
} satisfies Meta<typeof CardRegister>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
