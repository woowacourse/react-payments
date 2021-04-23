/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardPasswordInput from './index';

export default {
  title: 'units/CardPasswordInput',
  component: CardPasswordInput,
};

const Template = (args) => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
