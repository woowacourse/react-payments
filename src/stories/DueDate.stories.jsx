import React, { useState } from 'react';
import DueDate from '../components/DueDate';

export default {
  title: 'DueDate',
  component: DueDate,
  argTypes: {
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const [cardDate, setCardDate] = useState({
    month: '',
    year: '',
  });
  return <DueDate {...args} cardDate={cardDate} setCardDate={setCardDate} />;
};

export const Primary = Template.bind({});

Primary.args = {
  dimensions: { width: 754, height: 200 },
};
