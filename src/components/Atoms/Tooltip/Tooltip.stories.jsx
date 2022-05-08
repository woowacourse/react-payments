import React from 'react';
import Tooltip from '.';
import MESSAGE from '../../../constant/message';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
};

export const SecurityNumber = args => {
  return <Tooltip message={MESSAGE.TOOLTIP_SECURITY_NUMBER} {...args} />;
};
