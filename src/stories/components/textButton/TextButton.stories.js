import React from 'react';
import TextButton from './TextButton'

export default {
  title: 'Button/TextButton',
  component: TextButton,
};

const Template = (args) => <TextButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '다음'
};

