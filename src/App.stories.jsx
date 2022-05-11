import React from 'react';
import App from './App';

export default {
  title: 'App/App',
  component: App,
};

const Template = ({ ...args }) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};
