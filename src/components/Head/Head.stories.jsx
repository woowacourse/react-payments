import React from 'react';
import Head from '.';

export default {
  title: 'Example/Heading',
  component: Head,
};

const Template = args => <Head {...args} />;

export const CarAdd = Template.bind({});

CarAdd.args = {
  title: '카드 추가',
};
