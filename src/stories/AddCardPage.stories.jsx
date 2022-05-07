import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';
import { within, userEvent } from '@storybook/testing-library';

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

FilledForm.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('card-number-input-0'), '1234');
  userEvent.type(canvas.getByTestId('card-number-input-1'), '5678');
  userEvent.type(canvas.getByTestId('card-number-input-2'), '9012');
  userEvent.type(canvas.getByTestId('card-number-input-3'), '3456');

  userEvent.type(canvas.getByTestId('card-expire-month-input'), '12');
  userEvent.type(canvas.getByTestId('card-expire-year-input'), '24');

  userEvent.type(canvas.getByTestId('card-holder-name-input'), 'woowahan');

  userEvent.type(canvas.getByTestId('card-security-code-input'), '123');

  userEvent.type(canvas.getByTestId('card-password-input-0'), '1');
  userEvent.type(canvas.getByTestId('card-password-input-1'), '2');
};
