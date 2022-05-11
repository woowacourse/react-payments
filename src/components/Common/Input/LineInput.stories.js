import React from 'react';
import LineInput from './LineInput';

export default {
  component: LineInput,
  title: 'LineInput',
};

const Template = args => <LineInput {...args} />;

export const CardNameInput = Template.bind({});

CardNameInput.args = {
  children: <input className="input-underline" maxLength={15} required />,
};
