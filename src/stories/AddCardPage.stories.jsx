import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';

import { CardListContext } from '../context';
import AddCardPage from './../pages/AddCardPage';
import { MOCK_DATA } from './mock';

export default {
  title: 'AddCardPage',
  component: AddCardPage,
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

const Example = args => <AddCardPage />;

export const Default = Example.bind({});
Default.args = {};

export const FilledForm = Example.bind({});
FilledForm.args = {};
