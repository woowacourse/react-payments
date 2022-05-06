import React from 'react';
import LeftArrowButton from './LeftArrowButton';
export default {
  component: LeftArrowButton,
  title: 'LeftArrowButton',
};

const Template = args => <LeftArrowButton {...args} />;

export const DefaultBaseButton = Template.bind({});

DefaultBaseButton.args = {
  rest: '',
};
