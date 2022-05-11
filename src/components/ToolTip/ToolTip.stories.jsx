import React from 'react';
import ToolTip from './ToolTip';

export default {
  title: 'Component/ToolTip',
  component: ToolTip,
};

const Template = ({ icon, children, ...args }) => (
  <ToolTip icon={icon} {...args}>
    {children}
  </ToolTip>
);

export const Default = Template.bind({});
Default.args = {
  icon: '?',
  children: 'Hint message',
};
