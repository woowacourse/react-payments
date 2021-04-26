import React from 'react';

import { Page } from '../Page';

export default {
  title: 'Component/Page',
  component: Page,
  argTypes: {},
};

const Template = (args) => <Page {...args} />;

export const DefaultPage = Template.bind({});
DefaultPage.args = {};
