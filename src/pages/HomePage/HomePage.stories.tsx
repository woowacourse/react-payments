import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { type CardInfo, type PageInfo } from '@type/types';
import HomePage from './HomePage';
import { useLocalStorage } from '@hooks/useLocalStorage';

const STORIES_CARD_KEY = 'storiesCardKey';

function HomepageStories() {
  const [page, setPage] = useState<PageInfo>('homePage');
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    STORIES_CARD_KEY
  );

  return (
    <div className="app">
      {page === 'homePage' && (
        <HomePage
          cardList={cardList}
          setCardList={setCardList}
          setPage={setPage}
        />
      )}
    </div>
  );
}

const meta: Meta<typeof HomepageStories> = {
  component: HomepageStories,
  title: 'Page',
};

export default meta;
type Story = StoryObj<typeof HomepageStories>;

export const Home: Story = {
  args: {},
};
