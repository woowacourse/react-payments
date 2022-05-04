import React from 'react';
import CardNumber from '../components/CardNumber';

export default {
  title: 'CardNumber',
  component: CardNumber,
};

const Template = args => {
  const dispatch = () => {};
  return <CardNumber {...args} dispatch={dispatch} />;
};

export const Primary = Template.bind({});

Primary.args = {
  dispatch: () => {},
};
