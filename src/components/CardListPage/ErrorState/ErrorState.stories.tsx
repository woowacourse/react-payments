import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorState } from './ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Components/CardListPage/ErrorState',
  component: ErrorState,
};

export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  render: () => <ErrorState onRetry={() => {}} />,
};
