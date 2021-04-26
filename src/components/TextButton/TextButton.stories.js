import React from 'react';
import TextButton from './TextButton';

export default {
  component: TextButton,
  title: 'Items/TextButton',
};

const Template = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = { text: '다음' };
