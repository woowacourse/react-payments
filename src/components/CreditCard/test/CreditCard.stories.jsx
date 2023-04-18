import React from 'react';
import CreditCard from '..';

export default {
  title: 'foo/CreditCard',
  component: CreditCard,
};
function Template(args) {
  return <CreditCard {...args} />;
}
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
