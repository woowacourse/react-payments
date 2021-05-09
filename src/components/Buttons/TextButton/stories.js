import React from 'react';
import TextButton from '.';

export default {
  title: 'Components/Buttons/TextButton',
  component: TextButton,
};

const Template = (args) => <TextButton {...args}>다음</TextButton>;

export const Default = Template.bind({});

Default.args = {};
