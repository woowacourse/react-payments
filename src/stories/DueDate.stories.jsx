import React from 'react';
import DueDate from '../components/DueDate';

export default {
  title: 'DueDate',
  component: DueDate,
  argTypes: {
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const dispatch = () => {};

  return <DueDate {...args} dispatch={dispatch} />;
};

export const Primary = Template.bind({});

Primary.args = {
  dimensions: { width: 1000, height: 1000 },
};
