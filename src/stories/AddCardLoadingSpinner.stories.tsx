import { Meta, StoryObj } from '@storybook/react';
import AddCardLoadingSpinner from '../components/AddCardLoadingSpinner/AddCardLoadingSpinner';

const meta = {
  component: AddCardLoadingSpinner,
  title: 'Section/AddCardLoadingSpinner',
} satisfies Meta<typeof AddCardLoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
