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
  const dispatch = () => {};

  return <CardOwner {...args} dispatch={dispatch} />;
};

export const Primary = Template.bind({});

Primary.args = {
  ownerName: '',
};
