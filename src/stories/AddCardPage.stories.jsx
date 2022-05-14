import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';
import { within, userEvent } from '@storybook/testing-library';

import { CardListContext } from '../context/CardListContext';

import AddCardPage from './../pages/AddCardPage';
import { MOCK_DATA } from './mock';

export default {
  title: 'Page/AddCardPage',
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

export const WithCorrectInputValue = Example.bind({});
WithCorrectInputValue.args = {};

WithCorrectInputValue.play = ({ canvasElement }) => {
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

export const WithWrongInputValue = Example.bind({});
WithWrongInputValue.args = {};

WithWrongInputValue.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('card-number-input-0'), 'a');
  userEvent.type(canvas.getByTestId('card-number-input-1'), 'b');
  userEvent.type(canvas.getByTestId('card-number-input-2'), 'c');
  userEvent.type(canvas.getByTestId('card-number-input-3'), 'd');

  userEvent.type(canvas.getByTestId('card-expire-month-input'), 'a');
  userEvent.type(canvas.getByTestId('card-expire-year-input'), 'b');

  userEvent.type(canvas.getByTestId('card-holder-name-input'), '123');

  userEvent.type(canvas.getByTestId('card-security-code-input'), 'asd');

  userEvent.type(canvas.getByTestId('card-password-input-0'), 'a');
  userEvent.type(canvas.getByTestId('card-password-input-1'), 'b');
};
