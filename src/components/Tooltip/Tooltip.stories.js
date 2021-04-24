import React from 'react';
import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <img className="" src="images/CVC.png" alt="tooltip cvc images" />,
};
