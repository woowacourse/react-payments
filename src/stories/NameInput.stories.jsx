import React from 'react';
import NameInput from '../components/NameInput';

export default {
  title: 'NameInput',
  component: NameInput,
};

const Template = (args) => <NameInput {...args} />;

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  value: '1234',
  updateCard: () => {},
};
