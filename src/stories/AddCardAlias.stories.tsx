import { Meta, StoryObj } from '@storybook/react';
import AddCardAlias from '../pages/AddCardAlias';
import { CardType } from '../types/general';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: AddCardAlias,
  title: 'Page/AddCardAlias',
} satisfies Meta<typeof AddCardAlias>;

export default meta;

type Story = StoryObj<typeof AddCardAlias>;

export const Default: Story = {
  render: () => {
    const cards: CardType[] = [
      {
        id: 'a',
        cardNumbers: { 0: '1111', 1: '2222', 2: '3333', 3: '4444' },
        expiredDates: { 0: '12', 1: '23' },
        cardOwnerName: 'WOOWA',
        cardCompany: '신한카드',
      },
    ];
    const setCards = () => {
      alert('카드 별칭 등록 완료');
    };

    return (
      <MemoryRouter initialEntries={['/']}>
        <AddCardAlias cards={cards} setCards={setCards} />
      </MemoryRouter>
    );
  },
};
