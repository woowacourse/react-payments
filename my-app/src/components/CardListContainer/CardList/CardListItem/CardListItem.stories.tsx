import type { Meta, StoryObj } from '@storybook/react-vite';
import CardListItem from './CardListItem';

const meta: Meta<typeof CardListItem> = {
  title: 'Components/CardListContainer/CardListItem',
  component: CardListItem,
};

export default meta;
type Story = StoryObj<typeof CardListItem>;

export const Default: Story = {
  args: {
    card: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      issuerCode: '31',
      number: '551112******9012',
      expirationDate: '12/28',
    },
    onDelete: () => {},
  },
};
