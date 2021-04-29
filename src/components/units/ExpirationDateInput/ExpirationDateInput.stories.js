/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ExpirationDateInput from './index';

export default {
  title: 'units/ExpirationDateInput',
  component: ExpirationDateInput,
};

const Template = (args) => <ExpirationDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  expirationDate: { month: '04', year: '21' },
};
