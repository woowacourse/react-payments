import React from 'react';
import { Card } from '../components/common/Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardTemplate = Template.bind({});
CardTemplate.args = {};
