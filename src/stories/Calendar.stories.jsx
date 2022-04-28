import React, { useState } from 'react';
import Calendar from '../components/common/Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    items: { control: 'array' },
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const [item, setItem] = useState();
  return <Calendar {...args} setItem={setItem} />;
};
export const Primary = Template.bind({});

Primary.args = {
  items: [1, 2, 3, 4],
  dimensions: {
    width: 754,
    height: 200,
  },
};
