import React from 'react';
import CardAddPage from '.';

export default {
  title: 'Payment/Pages/CardAddPage',
  component: CardAddPage,
};

const Template = args => <CardAddPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
