import React from 'react';
import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const DotTemplate = (args) => <Icon.Dot {...args} />;

export const Dot = DotTemplate.bind({});

Dot.args = {
  size: '10px',
  color: '',
};

const LeftArrowTemplate = (args) => <Icon.LeftArrow {...args} />;

export const LeftArrow = LeftArrowTemplate.bind({});

LeftArrow.args = {
  size: '100px',
  color: '',
};

const QuestionMarkTemplate = (args) => <Icon.QuestionMark {...args} />;

export const QuestionMark = QuestionMarkTemplate.bind({});

QuestionMark.args = {
  size: '512px',
  color: '',
};
