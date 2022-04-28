import React from 'react';
import CardNumber from './CardNumber';

export default {
  title: 'CardNumber',
  component: CardNumber,
};

const Template = args => {
  const cardNumberCallback = () => {};
  return <CardNumber {...args} cardNumberCallback={cardNumberCallback} />;
};

export const Primary = Template.bind({});

Primary.args = {
  cardNumberCallback: () => {},
};
