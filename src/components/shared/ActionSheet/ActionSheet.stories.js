/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ActionSheet from './index';

export default {
  title: 'shared/ActionSheet',
  component: ActionSheet,
};

const Template = (args) => <ActionSheet {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: { 삭제: () => {} },
  isOpen: true,
  setActionSheetOpen: () => {},
};
