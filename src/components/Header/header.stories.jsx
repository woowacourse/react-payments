import React from 'react';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Example = Template.bind({});

Example.args = {
  title: '호프샐리',
};
