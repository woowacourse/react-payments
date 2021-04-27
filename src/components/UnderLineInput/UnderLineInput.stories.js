import React from 'react';
import UnderLineInput from './UnderLineInput';

export default {
  component: UnderLineInput,
  title: 'Items/UnderLineInput',
};

const Template = (args) => <UnderLineInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
