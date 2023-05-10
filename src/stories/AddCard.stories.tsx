import { Meta, StoryObj } from '@storybook/react';
import AddCard from '../pages/AddCard';
import { CardType } from '../types/general';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  component: AddCard,
  title: 'Page/AddCard',
} satisfies Meta<typeof AddCard>;

export default meta;

type Story = StoryObj<typeof AddCard>;

export const Default: Story = {
  render: () => {
    const cards: CardType[] = [];
    const setCards = () => {
      alert('카드 등록 완료');
    };

    return (
      <MemoryRouter initialEntries={['/']}>
        <AddCard cards={cards} setCards={setCards} />
      </MemoryRouter>
    );
  },
};
