import React from 'react';
import CardCompanySelector from '.';

export default {
  title: 'Payment/CardCompanySelector',
  component: CardCompanySelector,
};

const Template = args => {
  return (
    <div style={{ width: '375px' }}>
      <CardCompanySelector {...args} />
    </div>
  );
};

export const Default = Template.bind({});
