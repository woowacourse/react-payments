import React from 'react';
import { GuideMessage } from '../components/common/styled';

export default {
  title: 'GuideMessage',
  component: GuideMessage,
};

const Template = args => <GuideMessage>가이드 메세지</GuideMessage>;

export const Default = Template.bind({});
Default.args = {};
