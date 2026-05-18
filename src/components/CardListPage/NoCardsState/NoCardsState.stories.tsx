import type { Meta, StoryObj } from '@storybook/react-vite';
import { NoCardsState } from './NoCardsState';

const meta: Meta<typeof NoCardsState> = {
  title: 'Components/CardListPage/NoCardsState',
  component: NoCardsState,
};

export default meta;

type Story = StoryObj<typeof NoCardsState>;

export const Default: Story = {
  render: () => <NoCardsState />,
};
