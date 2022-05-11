import React, { useRef } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import CardFormPage from '../../components/CardFormPage';

export default {
  title: 'CardFormPage',
  component: CardFormPage,
};

const Template = () => {
  const targetRef = useRef({
    offsetWidth: 754,
    offsetHeight: 200,
  });
  return <CardFormPage targetRef={targetRef} />;
};

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});

FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId('card'));
  await userEvent.click(canvas.getAllByTestId('card-company')[0]);

  await userEvent.type(canvas.getByTestId('cardNoA'), '1234', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('cardNoB'), '1234', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('cardNoC'), '1234', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('cardNoD'), '1234', {
    delay: 100,
  });

  userEvent.click(canvas.getAllByTestId('date')[0], { delay: 200 });
  userEvent.click(canvas.getAllByTestId('item')[0], { delay: 200 });

  userEvent.click(canvas.getAllByTestId('date')[1], { delay: 200 });
  userEvent.click(canvas.getAllByTestId('item')[15], { delay: 200 });

  await userEvent.type(canvas.getByTestId('name'), 'AAA', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('cvc'), '123', {
    delay: 100,
  });

  await userEvent.type(canvas.getByTestId('pwdNoA'), '1', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('pwdNoB'), '2', {
    delay: 100,
  });
};
