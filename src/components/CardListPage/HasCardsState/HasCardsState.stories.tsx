import type { Meta, StoryObj } from '@storybook/react-vite';
import { HasCardsState } from './HasCardsState';

const meta: Meta<typeof HasCardsState> = {
  title: 'Components/CardListPage/HasCardsState',
  component: HasCardsState,
};

export default meta;

type Story = StoryObj<typeof HasCardsState>;

export const Default: Story = {
  render: () => <HasCardsState />,
};
