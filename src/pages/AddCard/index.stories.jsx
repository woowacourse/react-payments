import AddCard from '.';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'AddCardPage',
  component: AddCard,
};

const Template = (args) => <AddCard {...args} />;

export const Example = Template.bind({});

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('card-number-input-1'), '1234');
  userEvent.type(canvas.getByTestId('card-number-input-2'), '1234');
  userEvent.type(canvas.getByTestId('card-number-input-3'), '1234');
  userEvent.type(canvas.getByTestId('card-number-input-4'), '1234');
  userEvent.type(canvas.getByTestId('expired-month-input'), '12');
  userEvent.type(canvas.getByTestId('expired-year-input'), '25');
  userEvent.type(canvas.getByTestId('card-owner-input'), 'user');
  userEvent.type(canvas.getByTestId('secure-code-input'), '123');
  userEvent.type(canvas.getByTestId('password-input-1'), '1');
  userEvent.type(canvas.getByTestId('password-input-2'), '2');
};
