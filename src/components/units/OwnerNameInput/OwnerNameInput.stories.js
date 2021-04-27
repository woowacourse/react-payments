/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import OwnerNameInput from './index';
import INPUT_TYPE from '../../../constants/inputType';

export default {
  title: 'units/OwnerNameInput',
  component: OwnerNameInput,
};

const Template = (args) => <OwnerNameInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...INPUT_TYPE.OWNER_NAME,
  ownerName: 'ZIG',
};
