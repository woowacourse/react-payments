import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardList from './CardList';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardListContainer/CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {
    cardList: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        issuerCode: '31',
        number: '551112******9012',
        expirationDate: '12/28',
      },
    ],
    onRefresh: () => {},
  },
};
