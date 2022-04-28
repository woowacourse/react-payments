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
  const cardDateCallback = () => {};
  const setIsCorrectCardDate = () => {};
  return <DueDate {...args} cardDateCallback={cardDateCallback} setIsCorrectCardDate={setIsCorrectCardDate} />;
};

export const Primary = Template.bind({});

Primary.args = {
  dimensions: { width: 754, height: 200 },
};
