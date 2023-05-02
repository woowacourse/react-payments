import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { CardInfo, PageInfo } from '@type/types';
import AddCardPage from './AddCardPage';

const STORIES_CARD_KEY = 'storiesCardKey';

function AddCardPageStories() {
  const [page, setPage] = useState<PageInfo>('addCardPage');
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    STORIES_CARD_KEY
  );

  return (
    <div className="app">
      {page === 'addCardPage' && (
        <AddCardPage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
    </div>
  );
}

const meta: Meta<typeof AddCardPageStories> = {
  component: AddCardPageStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof AddCardPageStories>;

export const AddCard: Story = {
  args: {
    cardList: [],
    setCardList: (data: CardInfo[]) => {},
  },
};
