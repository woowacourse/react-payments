import React from 'react';
import { withReactContext } from 'storybook-react-context';
import AddCardResultPage from 'components/Page/AddCardResult/AddCardResult';
import CardListProvider from 'contexts/index';
import initialCardObject from 'mock/index';

export default {
  title: 'AddCardResultPage',
  component: AddCardResultPage,
  decorators: [
    withReactContext({
      Context: CardListProvider,
      initialState: { cardList: initialCardObject },
    }),
  ],
};

const Template = (args) => <AddCardResultPage {...args} />;
const Example = Template.bind({});

export { Example };
