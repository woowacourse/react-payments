import { userEvent, within } from '@storybook/testing-library';

import { AddCard } from 'pages';

export default {
  title: 'Pages/AddCard',
};

const Template = (args) => <AddCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = Template.bind({});

Filled.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('card-number'), '1234567812345678');
  userEvent.type(canvas.getByTestId('valid-date'), '1123');
  userEvent.type(canvas.getByTestId('card-owner-name'), 'albur');
  userEvent.type(canvas.getByTestId('CVC'), '123');
  userEvent.type(canvas.getByTestId('first-card-password'), '1');
  userEvent.type(canvas.getByTestId('second-card-password'), '1');
};
