import React from 'react';
import Option from '.';

export default {
  title: 'Components/Option',
  component: Option,
};

const Template = (args) => <Option {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: '로이드카드',
  color: '#04C09E',
  onClick: () => {},
};
