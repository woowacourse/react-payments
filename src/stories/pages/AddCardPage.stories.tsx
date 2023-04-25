import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AddCardPage from '../../pages/AddCardPage';
import { CardInfo, PageInfo } from '../../types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const STORIES_CARD_KEY = 'storiesCardkey';

function AddCardPageStories() {
  const [page, setPage] = useState<PageInfo>('homePage');
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    STORIES_CARD_KEY
  );

  return (
    <div className="app">
      <AddCardPage
        cardList={cardList}
        setCardList={setCardList}
        setPage={setPage}
      />
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
