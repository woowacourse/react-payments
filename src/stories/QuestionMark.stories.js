import React from 'react';

import { QuestionMark } from '../components/common/QuestionMark';

export default {
  title: 'Example/QuestionMark',
  component: QuestionMark,
};

const Template = (args) => <QuestionMark {...args} />;

export const QuestionMarkTemplate = Template.bind({});
QuestionMarkTemplate.args = {};
