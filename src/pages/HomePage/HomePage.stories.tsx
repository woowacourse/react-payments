import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { type CardInfo } from '@type/card';
import { type PageInfo } from '@type/types';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { PAGE_KIND } from '@constants/constant';
import HomePage from './HomePage';

const STORIES_CARD_KEY = 'storiesCardKey';

function HomepageStories() {
  const [page, setPage] = useState<PageInfo>(PAGE_KIND.HOME);
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>(
    [],
    STORIES_CARD_KEY
  );

  return (
    <div className="app">
      {page === PAGE_KIND.HOME && (
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
