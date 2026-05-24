import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import CardList from './CardList/CardList';
import CardListEmpty from './CardListEmpty/CardListEmpty';
import CardListError from './CardListError/CardListError';
import CardListLoading from './CardListLoading/CardListLoading';
import CardListContainer from './CardListContainer';

const cardList = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    issuerCode: '31',
    number: '551112******9012',
    expirationDate: '12/28',
  },
];

const meta: Meta<typeof CardListContainer> = {
  title: 'Components/CardListContainer',
  component: CardListContainer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardListContainer>;

export const List: Story = {
  args: {
    itemCount: cardList.length,
    children: <CardList cardList={cardList} onRefresh={() => {}} />,
  },
};

export const Empty: Story = {
  args: {
    itemCount: 0,
    children: <CardListEmpty />,
  },
};

export const Loading: Story = {
  args: {
    itemCount: null,
    children: <CardListLoading />,
  },
};

export const Error: Story = {
  args: {
    itemCount: null,
    children: <CardListError onRetry={() => {}} />,
  },
};
