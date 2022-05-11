import { userEvent, within } from '@storybook/testing-library';

import { AddCard } from 'pages';

export default {
  title: 'Pages/AddCard',
};

function Template(args) {
  return <AddCard {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('card-number'), '1234567812345678');
  await userEvent.type(canvas.getByTestId('valid-date'), '1123');
  await userEvent.type(canvas.getByTestId('card-owner-name'), 'albur');
  await userEvent.type(canvas.getByTestId('CVC'), '123');
  await userEvent.type(canvas.getByTestId('first-card-password'), '1');
  await userEvent.type(canvas.getByTestId('second-card-password'), '1');
};
