import React from 'react';

import Label from './Label';

export default {
  title: 'Example/Label',
  component: Label,
};

const Template = ({ children, ...args }) => <Label {...args}>{children}</Label>;

export const Default = Template.bind({});
Default.args = {
  children: <>Label</>,
};

export const WithNameLength = Template.bind({});
WithNameLength.args = {
  className: 'name-length',
  children: (
    <>
      Label <span className="name-length">0/30</span>
    </>
  ),
};
