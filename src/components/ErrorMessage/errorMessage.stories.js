import React from 'react';
import ErrorMessage from './index';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Example = Template.bind({});

Example.args = {
  message: '오류가 발생했습니다.',
};
