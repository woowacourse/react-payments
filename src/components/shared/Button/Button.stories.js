/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Button from './index';

export default {
  title: 'shared/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '다음',
};
