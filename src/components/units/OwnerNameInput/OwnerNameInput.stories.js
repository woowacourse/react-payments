/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import OwnerNameInput from './index';

export default {
  title: 'units/OwnerNameInput',
  component: OwnerNameInput,
};

const Template = (args) => <OwnerNameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
