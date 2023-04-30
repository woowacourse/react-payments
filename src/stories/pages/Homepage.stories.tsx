import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CardInfo, PageInfo } from '../../types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Homepage from '../../pages/HomePage';

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
        <Homepage
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

export const HomePage: Story = {
  args: {},
};
