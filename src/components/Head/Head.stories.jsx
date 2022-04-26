import React from 'react';
import Head from '.';

export default {
  title: 'Example/Head',
  component: Head,
};

const Template = args => <Head {...args} />;

export const CardAdd = Template.bind({});

CardAdd.args = {
  title: '카드 추가',
};
