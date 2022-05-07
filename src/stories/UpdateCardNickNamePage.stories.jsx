import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';

import { CardListContext } from '../context';
import UpdateCardNickNamePage from './../pages/UpdateCardNickNamePage';
import { MOCK_DATA } from './mock';

export default {
  title: 'UpdateCardNickNamePage',
  component: UpdateCardNickNamePage,
  decorators: [
    withReactContext({
      Context: CardListContext,
      initialState: { cardList: MOCK_DATA.CARD_LIST },
    }),
    Story => (
      <MemoryRouter initialEntries={['/updateCardNickName/0']}>
        <Routes>
          <Route path="/updateCardNickName/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

const Example = args => <UpdateCardNickNamePage />;

export const Default = Example.bind({});
Default.args = {};

export const FilledForm = Example.bind({});
FilledForm.args = {};
