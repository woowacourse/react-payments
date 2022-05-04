import React from 'react';

import LetterCounter from '../components/common/LetterCounter';

export default {
  title: 'LetterCounter',
  component: LetterCounter,
  argTypes: {
    currentLength: { control: 'number' },
    maxLength: { control: 'number' },
  },
};

const Template = args => <LetterCounter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  currentLength: 0,
  maxLength: 30,
};
