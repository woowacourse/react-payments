import React from 'react';

import BackwardButton from '../components/common/BackwardButton';

export default {
  title: 'BackwardButton',
  component: BackwardButton,
};

const Template = (args) => <BackwardButton {...args} />;

export const DefaultBackwardButton = Template.bind({});
DefaultBackwardButton.args = {
  children: '뒤로 가기',
};

export const SecondaryBackwardButton = Template.bind({});
SecondaryBackwardButton.args = {
  children: '원하는 내용 삽입 가능',
};
