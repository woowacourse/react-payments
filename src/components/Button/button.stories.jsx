import React from 'react';
import Button from 'components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: '다음',
  name: 'button',
};
