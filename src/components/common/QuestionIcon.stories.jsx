import React from 'react';

import QuestionIcon from './QuestionIcon';

export default {
  title: 'QuestionIcon',
  component: QuestionIcon,
  argTypes: {
    textContent: { control: 'text' },
  },
};

const Template = args => <QuestionIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  textContent: '',
};
