import React from 'react';
import CardOwner from 'containers/CardOwnerInput.jsx/CardOwner';

export default {
  title: 'CardAddition/CardOwner',
  component: CardOwner,
};

const Template = (args) => <CardOwner {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: '#737373',
};
