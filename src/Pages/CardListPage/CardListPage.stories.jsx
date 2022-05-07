import React from 'react';
import CardListPage from '.';

export default {
  title: 'Payment/Pages/CardListPage',
  component: CardListPage,
};

const Template = args => <CardListPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
