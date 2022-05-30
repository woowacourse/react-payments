import React from 'react';
import { withReactContext } from 'storybook-react-context';

import AddCardPage from 'components/Page/AddCard/AddCardPage';
import CardListProvider from 'contexts/index.js';
import initialCardObject from 'mock/index.ts';

export default {
  title: 'AddCardPage',
  component: AddCardPage,
  decorators: [
    withReactContext({
      Context: CardListProvider,
      initialState: initialCardObject,
    }),
  ],
};

const Template = (args) => <AddCardPage {...args} />;
const Example = Template.bind({});

export { Example };
