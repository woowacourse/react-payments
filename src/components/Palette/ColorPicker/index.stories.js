import React from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

const Template = (args) => <ColorPicker {...args} />;

export const Example = Template.bind({});

Example.args = {
  color: 'red',
  name: '포코카드',
};
