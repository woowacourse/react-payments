import React, { useState } from 'react';
import Calendar from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    items: { control: 'array' },
    placeholder: { control: 'text' },
  },
};

const Template = args => {
  const [item, setItem] = useState();
  return <Calendar {...args} setItem={setItem} />;
};
export const Primary = Template.bind({});

Primary.args = {
  items: [1, 2, 3, 4],
  placeholder: 'MM',
};
