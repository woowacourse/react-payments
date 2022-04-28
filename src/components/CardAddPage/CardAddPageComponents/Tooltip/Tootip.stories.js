import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const TooltipImage = Template.bind({});
TooltipImage.args = {};
