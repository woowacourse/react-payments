import React from 'react';

import { InputBox } from './InputBox';
import { InputBasic } from './InputBasic';

export default {
  title: 'Example/InputBox',
  component: InputBox,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <InputBox {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  children: (
    <>
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
    </>
  ),
};
