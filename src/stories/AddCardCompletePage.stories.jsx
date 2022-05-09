import { withReactContext } from 'storybook-react-context';

import { userEvent, within } from '@storybook/testing-library';

import { CardContext } from 'contexts/CardContext';

import { AddCardComplete } from 'pages';

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

function Template(args) {
  return <AddCardComplete {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('nickname'), '만능 카드!');
};
