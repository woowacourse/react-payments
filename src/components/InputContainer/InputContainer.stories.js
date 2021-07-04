import React from 'react';

import InputContainer from './InputContainer';

export default {
  component: InputContainer,
  title: 'Items/InputContainer',
};

const Template = (args) => <InputContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'TEST TITLE',
};
