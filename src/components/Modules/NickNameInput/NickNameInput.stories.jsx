import React from 'react';
import NickNameInput from '.';

export default {
  title: 'Payment/Modules/NickNameInput',
  component: NickNameInput,
};

const Template = args => <NickNameInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
