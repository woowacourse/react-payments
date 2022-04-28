import React from 'react';

import Card from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
};

function Template(args) {
  return <Card {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  bgColor: '#D2D2D2',
  size: 'medium',
};
