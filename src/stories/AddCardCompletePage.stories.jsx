import { userEvent, within } from '@storybook/testing-library';

import { withReactContext } from 'storybook-react-context';

import { AddCardComplete } from 'pages';

import { CardContext } from 'contexts/CardContext';

export default {
  title: 'Pages/AddCardComplete',
  decorators: [
    withReactContext({
      Context: CardContext,
      initialState: {
        cardNumber: '1234567812345678',
        cardKind: {
          color: 'lightblue',
          title: '공원 카드',
        },
        cardOwnerName: ' ',
        validDate: '1122',
      },
    }),
  ],
};

const Template = (args) => <AddCardComplete {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});

Filled.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('nickname'), '만능 카드!');
};
