import React from 'react';
import NameInput from '../components/NameInput';

export default {
  title: 'NameInput',
  component: NameInput,
};

const Template = (args) => <NameInput {...args} />;

export const DisplayedCardNumberInput = Template.bind({});

DisplayedCardNumberInput.args = {
  value: '1234',
};
