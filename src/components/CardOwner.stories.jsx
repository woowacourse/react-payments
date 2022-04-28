import React from 'react';
import CardOwner from './CardOwner';

export default {
  title: 'CardOwner',
  component: CardOwner,
  argTypes: {
    ownerName: { control: 'text' },
  },
};

const Template = args => {
  const ownerNameCallback = () => {};
  return <CardOwner {...args} ownerNameCallback={ownerNameCallback} />;
};

export const Primary = Template.bind({});

Primary.args = {
  ownerName: '',
};
