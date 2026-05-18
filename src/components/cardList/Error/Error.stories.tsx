import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorState } from './Error';

const meta: Meta<typeof ErrorState> = {
  title: 'Components/CardList/Error',
  component: ErrorState,
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  render: () => <ErrorState />,
};
