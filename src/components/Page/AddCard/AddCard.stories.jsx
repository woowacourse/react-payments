import React from 'react';
import { withReactContext } from 'storybook-react-context';
import { screen, userEvent } from '@storybook/testing-library';

import AddCardPage from 'components/Page/AddCard/AddCardPage';
import { CardListContext, CardIndexContext } from 'contexts/index';
import { initialCardObject } from 'mock/index';

export default {
  title: 'AddCardPage',
  component: AddCardPage,
  decorators: [
    withReactContext({
      Context: CardListContext,
      initialState: initialCardObject,
    }),
    withReactContext({
      Context: CardIndexContext,
      initialState: 1,
    }),
  ],
};

const Template = (args) => <AddCardPage {...args} />;
const Example = Template.bind({});
Example.play = () => {
  userEvent.type(screen.getByTestId('first-card-number'), '1111');
  userEvent.type(screen.getByTestId('second-card-number'), '2222');
  userEvent.type(screen.getByTestId('third-card-number'), '3333');
  userEvent.type(screen.getByTestId('fourth-card-number'), '4444');
  userEvent.type(screen.getByTestId('expired-month'), '03');
  userEvent.type(screen.getByTestId('expired-year'), '24');
  userEvent.type(screen.getByTestId('card-owner-name'), 'tete');
  userEvent.type(screen.getByTestId('secure-code'), '123');
  userEvent.type(screen.getByTestId('first-password'), '1');
  userEvent.type(screen.getByTestId('second-password'), '2');
};

export { Example };
