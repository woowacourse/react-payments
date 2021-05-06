/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardRegister from './index';

export default {
  title: 'pages/CardRegister',
  component: CardRegister,
};

const Template = (args) => <CardRegister {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardData: () => {},
  handleGoNext: () => {},
};
