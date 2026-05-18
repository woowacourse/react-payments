import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingState } from './LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Components/CardListPage/LoadingState',
  component: LoadingState,
};

export default meta;

type Story = StoryObj<typeof LoadingState>;

export const Default: Story = {
  render: () => <LoadingState />,
};
