import React, { useState } from 'react';
import Select from '../components/common/Select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    items: { control: 'array' },
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const [item, setItem] = useState();
  return <Select {...args} setItem={setItem} />;
};
export const Primary = Template.bind({});

Primary.args = {
  items: [1, 2, 3, 4],
  dimensions: {
    width: 1000,
    height: 1000,
  },
};
