import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (props) => <Input {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const Half = Template.bind({});
Half.args = { width: 'half' };

export const Quarter = Template.bind({});
Quarter.args = { width: 'quarter' };

export const Small = Template.bind({});
Small.args = { width: 'small' };
