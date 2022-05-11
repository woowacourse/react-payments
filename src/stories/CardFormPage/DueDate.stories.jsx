import React, { useContext } from 'react';
import DueDate from '../../components/CardFormPage/DueDate';
import { CardInfoContext } from '../../context';

export default {
  title: 'DueDate',
  component: DueDate,
  argTypes: {
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const { cardDate } = useContext(CardInfoContext);
  return <DueDate {...args} cardDate={cardDate} />;
};

export const Primary = Template.bind({});

Primary.args = {
  dimensions: { width: 754, height: 200 },
};
