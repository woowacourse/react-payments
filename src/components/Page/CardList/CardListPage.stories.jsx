import React from 'react';
import CardListPage from './CardListPage';

import { withReactContext } from 'storybook-react-context';
import { CardListContext } from 'contexts/index';
import { initialCardObject } from 'mock/index';

export default {
  title: 'CardListPage',
  component: CardListPage,
  decorators: [
    withReactContext({
      Context: CardListContext,
      initialState: { cardList: initialCardObject },
    }),
  ],
};

const Template = () => <CardListPage />;

export const Example = Template.bind({});
