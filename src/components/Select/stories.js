import React from 'react';
import Select from '.';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSetCardCompany: () => {},
};
