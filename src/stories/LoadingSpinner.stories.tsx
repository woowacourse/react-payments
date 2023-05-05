import { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const meta = {
  component: LoadingSpinner,
  title: 'Section/LoadingSpinner',
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingSpinnerStory: Story = {};
