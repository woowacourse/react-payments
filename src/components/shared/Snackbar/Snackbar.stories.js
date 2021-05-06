/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Snackbar from './index';

export default {
  title: 'shared/Snackbar',
  component: Snackbar,
};

const Template = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: '스낵바 메시지 기본',
  isShowing: true,
};
