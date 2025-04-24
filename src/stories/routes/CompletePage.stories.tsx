import type { Meta, StoryObj } from '@storybook/react';
import CompletePage from '../../routes/CompletePage';

const meta = {
  title: 'Routes/CompletePage',
  component: CompletePage,
  tags: ['autodocs'],
} satisfies Meta<typeof CompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
