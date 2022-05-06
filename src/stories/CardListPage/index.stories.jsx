import React, { useRef } from 'react';
import { within, userEvent } from '@storybook/testing-library';
import CardListPage from '../../components/CardListPage';

export default {
  title: 'CardListPage',
  component: CardListPage,
};

const Template = () => {
  return <CardListPage />;
};

export const EmptyForm = Template.bind({});
