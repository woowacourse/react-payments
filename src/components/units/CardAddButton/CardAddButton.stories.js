/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardAddButton from './index';

export default {
  title: 'shared/CardAddButton',
  component: CardAddButton,
};

const Template = (args) => <CardAddButton {...args} />;

export const Default = Template.bind({});
