import React from 'react';
import YearInput from '../components/YearInput';

export default {
  title: 'YearInput',
  component: YearInput,
  decorators: [
    (Story) => (
      <div style={{ width: '80px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <YearInput {...args} />;

export const ExpiredYearInput = Template.bind({});

ExpiredYearInput.args = {
  value: '24',
};
