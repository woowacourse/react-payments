import React from 'react';

import ToolTip from '../components/ToolTip';

export default {
  title: 'Example/ToolTip',
  component: ToolTip,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <ToolTip {...args}>?</ToolTip>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'help',
  tip: '에러에러',
};
