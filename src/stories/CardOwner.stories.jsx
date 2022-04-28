import React from 'react';
import CardOwner from '../components/CardOwner';

export default {
  title: 'CardOwner',
  component: CardOwner,
  argTypes: {
    ownerName: { control: 'text' },
  },
};

const Template = args => {
  const ownerNameCallback = () => {};
  const correctOwnerNameCallback = () => {};
  return (
    <CardOwner {...args} ownerNameCallback={ownerNameCallback} correctOwnerNameCallback={correctOwnerNameCallback} />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  ownerName: '',
};
