import React from 'react';

import ErrorMessage from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = args => <ErrorMessage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'coke taetae',
};
