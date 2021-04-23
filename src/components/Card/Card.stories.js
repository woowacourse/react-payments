import React from 'react';

import { Card } from '../Card';

export default {
  title: 'Component/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
