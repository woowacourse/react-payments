import React, { useRef } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import CardSubmitPage from '../../components/CardSubmitPage';

export default {
  title: 'CardSubmitPage',
  component: CardSubmitPage,
};

const Template = () => {
  const nextId = useRef(3);
  return <CardSubmitPage nextId={nextId} />;
};

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});

FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('nickname'), 'TT', {
    delay: 100,
  });
};
