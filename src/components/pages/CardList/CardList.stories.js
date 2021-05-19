/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardList from './index';

export default {
  title: 'pages/CardList',
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleAddCard: () => {},
  handleGoUpdate: () => {},
};
