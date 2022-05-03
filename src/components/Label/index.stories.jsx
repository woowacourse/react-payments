import React from 'react';
import Label from './index';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Example = Template.bind({});

Example.args = {
  description: '호프샐리 페어입니다.',
};
