/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardSelector from './index';

export default {
  title: 'units/CardSelector',
  component: CardSelector,
};

const Template = (args) => <CardSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  setBankId: () => {},
  setSelectorOpened: () => {},
};
