import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';

import { CardListContext } from './../context';
import CardListPage from './../pages/CardListPage';
import { MOCK_DATA } from './mock';

export default {
  title: 'Page/CardListPage',
  component: CardListPage,
  decorators: [
    withReactContext({
      Context: CardListContext,
      initialState: { cardList: MOCK_DATA.CARD_LIST },
    }),
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Example = args => <CardListPage />;

export const Default = Example.bind({});
Default.args = {};
