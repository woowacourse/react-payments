/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import PageHost from './index';
import { Default as CardRegister } from '../pages/CardRegister/CardRegister.stories';
import { Default as CardCompletion } from '../pages/CardCompletion/CardCompletion.stories';

export default {
  title: 'PageHost',
  component: PageHost,
};

const Template = (args) => <PageHost {...args} />;

export const CardRegisterPage = Template.bind({});
CardRegisterPage.args = {
  navigationTitle: '카드추가',
  children: <CardRegister />,
};

export const CardCompletionPage = Template.bind({});
CardCompletionPage.args = {
  navigationTitle: '',
  children: <CardCompletion {...CardCompletion.args} />,
};
