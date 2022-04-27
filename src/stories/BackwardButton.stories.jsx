import React from 'react';

import BackwardButton from '../components/BackwardButton';

export default {
  title: 'Example/Button',
  component: BackwardButton,
};

const Template = () => <BackwardButton>뒤로 가기</BackwardButton>;

export const Primary = Template.bind({});
