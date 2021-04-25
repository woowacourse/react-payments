/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardRegisterForm from './index';

export default {
  title: 'units/CardRegisterForm',
};

const Template = (args) => <CardRegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
