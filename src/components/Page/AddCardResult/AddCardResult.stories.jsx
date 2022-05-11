import React from 'react';
import AddCardResultPage from './AddCardResult';
import { withReactContext } from 'storybook-react-context';
import { CardListContext, CardIndexContext } from '../../../contexts/index';
import { initialCardObject } from '../../../mock/index';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'AddCardResultPage',
  component: AddCardResultPage,
  decorators: [
    withReactContext({
      Context: CardListContext,
      initialState: { cardList: initialCardObject },
    }),
    withReactContext({
      Context: CardIndexContext,
      initialState: { cardIndex: 1 },
    }),
  ],
};

const Template = (args) => <AddCardResultPage {...args} />;
const Example = Template.bind({});

Example.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByTestId('card-nickname'), '우테코 카드');
};

export { Example };
